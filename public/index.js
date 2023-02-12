import {
  mainPageHTML,
  createMulPageHTML,
  joinMulPageHTML,
  gamePageHTML,
} from "./pages.js";

import { io } from "./socketio";

import { Game, Cell, Figure, Board } from "./models.js";

const socket = io();

const root = document.getElementById("root");
const url = window.location.origin;
const hashCode = window.location.hash.substring(1);
let roomCode;

main();

function main() {
  if (hashCode.length === 0) {
    mainPage();
  } else {
    history.replaceState(null, null, " ");
    joinMulPage();
    let joinInput = document.querySelector(".multiplayer-join__input");
    joinInput.value = hashCode;
  }
}

function mainPage() {
  mainPageHTML(root);
  document
    .querySelector(".main__item.create")
    .addEventListener("click", (e) => {
      e.preventDefault();
      createMulPage();
    });

  document.querySelector(".main__item.join").addEventListener("click", (e) => {
    e.preventDefault();
    joinMulPage();
  });
}

function createMulPage() {
  createMulPageHTML(root);
  goToMainMenu();

  const codeBlock = document.querySelector(".multiplayer-create__code");
  const linkBlock = document.querySelector(".multiplayer-create__link");
  const copyModal = document.querySelector(".multiplayer-create__copy-modal");

  roomCode = Math.random().toString(36).substr(2, 8);

  codeBlock.innerText = roomCode;
  linkBlock.innerText = `${url}#${roomCode}`;

  copyText(codeBlock, copyModal);
  copyText(linkBlock, copyModal);

  socket.emit("joinRoom", roomCode);

  socket.on("player1", ({ firstPlayerColor, currentRoom }) => {
    if (currentRoom === roomCode) {
      gamePage(firstPlayerColor);
    }
  });
}

function copyText(DOMElement, modal) {
  DOMElement.addEventListener("click", () => {
    let range = document.createRange();
    range.selectNode(DOMElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    modal.classList.add("active");
    setTimeout(() => {
      modal.classList.remove("active");
    }, 2000);
  });
}

function joinMulPage() {
  joinMulPageHTML(root);
  goToMainMenu();

  const joinInput = document.querySelector(".multiplayer-join__input");
  const joinRoomBtn = document.querySelector(".multiplayer-join__button");

  joinRoomBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const joinInputVal = joinInput.value;
    roomCode = joinInputVal;
    socket.emit("joinRoom", roomCode);
  });
  socket.on("player2", ({ secondPlayerColor, currentRoom }) => {
    if (currentRoom === roomCode) {
      gamePage(secondPlayerColor);
    }
  });
}

function goToMainMenu() {
  const btnToMain = document.getElementById("to-main");
  btnToMain.style.display = "block";
  btnToMain.addEventListener("click", (e) => {
    e.preventDefault();
    mainPage();
    btnToMain.style.display = "none";
  });
}

function gamePage(playerColor) {
  const btnToMain = document.getElementById("to-main");
  if (btnToMain) {
    btnToMain.style.display = "none";
  }
  gamePageHTML(root);
  const boardWrapper = document.querySelector(".game__board");
  if (playerColor === "black") {
    boardWrapper.classList.add("black");
  }

  let board;

  function restartGame(playerColor) {
    const game = new Game("white", playerColor);
    const boardContainer = document.querySelector(".game__board");
    board = new Board(boardContainer, game);
    board.initCells();
    board.initFigures();
  }

  restartGame(playerColor);
  gameCycle(board);
}

function displayGameInfo(board) {
  const moveBlock = document.querySelector(".game-info__move");
  const playerBlock = document.querySelector(".game-info__player");
  let myColor;
  board.game.playerColor === board.game.player
    ? (myColor = "You")
    : (myColor = "Opponent");

  moveBlock.innerText = `Move: ${board.game.move}`;
  playerBlock.innerText = `Player: ${board.game.player} (${myColor})`;
}

function gameClick(target, board) {
  if (!target) return;
  if (
    target.classList.contains("game__figure") &&
    target !== board.selectedFigure &&
    board.checkFigureGameColor(target)
  ) {
    const figureCords = target
      .getAttribute("data-figure-cord")
      .split(",")
      .map((i) => +i);

    board.selectedFigure = board.cells[figureCords[0]][figureCords[1]].figure;

    if (board.possibleAttacks.length) {
      board.clearCellStyles(["dot_green", "mark"]);
      board.markSelectedFigureCell();
    } else {
      board.clearCellStyles(["dot_green", "dot_red", "mark"]);
      board.markSelectedFigureCell();
      board.getPossibleMoves();
      board.markPossibleMoves();
    }
  } else if (
    target.classList.contains("game__cell") &&
    !target.children.length &&
    board.selectedFigure !== null
  ) {
    const cellCords = target
      .getAttribute("data-cell-cord")
      .split(",")
      .map((i) => +i);

    board.selectedCell = board.cells[cellCords[0]][cellCords[1]];

    if (board.possibleAttacks.length && board.checkCellAttackTo()) {
      board.attackFigure();
      board.setKing();
      board.getPossibleAttacks();
      if (board.figureLastAttacked !== null && !board.possibleAttacks.length) {
        board.game.player = changeColor(board);
        board.figureLastAttacked = null;
        board.possibleAttacks = [];
        board.game.move++;
      }

      const props = {
        playerColor: board.game.player,
        cells: board.cells,
        figureLastAttacked: board.figureLastAttacked,
        possibleAttacks: board.possibleAttacks,
        move: board.game.move,
      };

      const room = roomCode;

      playerTurn({ props, room });
    } else if (board.checkCellMoveTo(target) && !board.possibleAttacks.length) {
      board.moveFigure();

      board.game.player = changeColor(board);
      board.figureLastAttacked = null;
      board.possibleAttacks = [];
      board.game.move++;

      const props = {
        playerColor: board.game.player,
        cells: board.cells,
        figureLastAttacked: board.figureLastAttacked,
        possibleAttacks: board.possibleAttacks,
        move: board.game.move++,
      };

      const room = roomCode;
      playerTurn({ props, room });
    }
  }
}

function gameCycle(board) {
  socket.on("turnPlay", ({ props, room }) => {
    if (roomCode === room) {
      board.cells = props.cells;
      board.game.player = props.playerColor;
      board.possibleAttacks = props.possibleAttacks;
      board.figureLastAttacked = props.figureLastAttacked;
      board.game.move = props.move;
      gameTurn(board);
    }
  });
  if (board.game.move === 1) {
    gameTurn(board);
  }
  socket.on("playerDisconect", (room) => {
    if (room === roomCode) {
      playerDisconnected();
    }
  });
}

function gameTurn(board) {
  let gameEnd = false;
  board.selectedCell = null;
  board.selectedFigure = null;

  board.renderBoard();
  board.setKing();

  board.getPossibleAttacks();
  board.markPossibleAttacks();

  if (board.game.move > 100) {
    endScreen(board, "draw");
  }

  gameOver(board).forEach((item, index) => {
    if (item) {
      gameEnd = true;
      let playerWinColor;
      index === 0 ? (playerWinColor = "black") : (playerWinColor = "white");
      endScreen(board, playerWinColor);
    }
  });

  if (board.game.player === board.game.playerColor && !gameEnd) {
    document.querySelectorAll(".game__cell").forEach((item) => {
      item.addEventListener("click", (event) => gameClick(event.target, board));
    });
  }
  displayGameInfo(board);
}

function changeColor(board) {
  return board.game.player === "white" ? "black" : "white";
}

function playerTurn(params) {
  socket.emit("playTurn", params);
}

function gameOver(board) {
  let whiteLose = true;
  let blackLose = true;
  board.cells.forEach((row) => {
    row.forEach((cell) => {
      if (cell.figure !== null) {
        if (cell.figure.color === "white") {
          whiteLose = false;
        } else {
          blackLose = false;
        }
      }
    });
  });
  return [whiteLose, blackLose];
}

function endScreen(board, playerWinColor) {
  const endScreenWrapper = document.querySelector(".game__end-wrapper");
  const endScreenTitle = document.querySelector(".game__end-title");
  const endRestartBtn = document.querySelector(".game__end-btn.restart");
  const endMenuBtn = document.querySelector(".game__end-btn.menu");

  endScreenWrapper.style.display = "flex";

  let myColor;
  if (playerWinColor === "draw") {
    myColor = "";
  } else if (playerWinColor === board.game.playerColor) {
    myColor = "(You)";
  } else {
    myColor = "(Opponent)";
  }

  endScreenTitle.innerText = `${playerWinColor.toUpperCase()} ${myColor} Win`;

  endRestartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    socket.emit("restartGame", roomCode);
  });

  endMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    endScreenWrapper.style.display = "none";
  });

  socket.on("restartPlayer1", ({ firstPlayerColor, room }) => {
    endScreenWrapper.style.display = "none";
    if (room === roomCode) {
      gamePage(firstPlayerColor);
    }
  });

  socket.on("restartPlayer2", ({ secondPlayerColor, room }) => {
    endScreenWrapper.style.display = "none";
    if (room === roomCode) {
      gamePage(secondPlayerColor);
    }
  });
}

function playerDisconnected() {
  const endScreenWrapper = document.querySelector(".game__end-wrapper");
  const endScreenTitle = document.querySelector(".game__end-title");
  const endRestartBtn = document.querySelector(".game__end-btn.restart");
  const endMenuBtn = document.querySelector(".game__end-btn.menu");

  endScreenWrapper.style.display = "flex";
  endRestartBtn.style.display = "none";
  endScreenTitle.innerText = "Opponent Left The Game";

  endMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    endScreenWrapper.style.display = "none";
    mainPage();
  });
}

main();
