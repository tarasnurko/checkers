export class Game {
  constructor(player, playerColor) {
    this.player = player;
    this.playerColor = playerColor;
    this.move = 1;
  }
}

export class Figure {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.isKing = false;
  }
}

export class Cell {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = null;
  }
  getFigure() {
    return this.figure;
  }
}

export class Board {
  constructor(container, game) {
    this.game = game;
    this.size = 8;
    this.cells = [];
    this.container = container;
    this.selectedCell = null;
    this.selectedFigure = null;
    this.possibleMoves = [];
    this.possibleAttacks = [];
    this.figureLastAttacked = null;
  }

  initCells() {
    for (let i = 0; i < this.size; i++) {
      const row = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell(i, j, (i + j) % 2 === 0 ? "white" : "black"));
      }
      this.cells.push(row);
    }
  }

  initFigures() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if ((i + j) % 2 !== 0 && i < 3) {
          this.cells[i][j].figure = new Figure(i, j, "black");
        } else if ((i + j) % 2 !== 0 && i > 4) {
          this.cells[i][j].figure = new Figure(i, j, "white");
        }
      }
    }
  }

  getPossbleKingMovesTopLeft(i, j) {
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (i - a < 0 || j - a < 0 || this.cells[i - a][j - a].figure !== null)
        return arr;
      else {
        arr.push(this.cells[i - a][j - a]);
      }
    }
    return arr;
  }

  getPossbleKingMovesTopRight(i, j) {
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (
        i - a < 0 ||
        j + a >= this.size ||
        this.cells[i - a][j + a].figure !== null
      )
        return arr;
      else {
        arr.push(this.cells[i - a][j + a]);
      }
    }
    return arr;
  }

  getPossbleKingMovesBottomLeft(i, j) {
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (
        i + a >= this.size ||
        j - a < 0 ||
        this.cells[i + a][j - a].figure !== null
      )
        return arr;
      else {
        arr.push(this.cells[i + a][j - a]);
      }
    }
    return arr;
  }

  getPossbleKingMovesBottomRight(i, j) {
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (
        i + a >= this.size ||
        j + a >= this.size ||
        this.cells[i + a][j + a].figure !== null
      )
        return arr;
      else {
        arr.push(this.cells[i + a][j + a]);
      }
    }
    return arr;
  }

  getPossibleMoves() {
    const possibleMoves = [];
    const figureCords = [this.selectedFigure.x, this.selectedFigure.y];
    let cof;

    if (this.selectedFigure.isKing) {
      possibleMoves.push(
        ...this.getPossbleKingMovesTopLeft(figureCords[0], figureCords[1]),
        ...this.getPossbleKingMovesTopRight(figureCords[0], figureCords[1]),
        ...this.getPossbleKingMovesBottomLeft(figureCords[0], figureCords[1]),
        ...this.getPossbleKingMovesBottomRight(figureCords[0], figureCords[1])
      );
    } else {
      this.game.player === "white" ? (cof = 1) : (cof = -1);

      figureCords[1] - 1 >= 0 &&
      this.cells[figureCords[0] - cof][figureCords[1] - 1].figure === null
        ? possibleMoves.push(
            this.cells[figureCords[0] - cof][figureCords[1] - 1]
          )
        : "";

      figureCords[1] + 1 < this.size &&
      this.cells[figureCords[0] - cof][figureCords[1] + 1].figure === null
        ? possibleMoves.push(
            this.cells[figureCords[0] - cof][figureCords[1] + 1]
          )
        : "";
    }
    this.possibleMoves = possibleMoves;
  }

  canAttackTopLeft(i, j) {
    if (i - 2 < 0 || j - 2 < 0) return false;
    else if (
      this.cells[i - 1][j - 1].figure !== null &&
      this.cells[i - 1][j - 1].figure.color !== this.game.player &&
      this.cells[i - 2][j - 2].figure === null
    )
      return [this.cells[i - 1][j - 1], [this.cells[i - 2][j - 2]]];
    return false;
  }

  canAttackTopRight(i, j) {
    if (i - 2 < 0 || j + 2 >= this.size) return false;
    else if (
      this.cells[i - 1][j + 1].figure !== null &&
      this.cells[i - 1][j + 1].figure.color !== this.game.player &&
      this.cells[i - 2][j + 2].figure === null
    )
      return [this.cells[i - 1][j + 1], [this.cells[i - 2][j + 2]]];
    return false;
  }

  canAttackBottomLeft(i, j) {
    if (i + 2 >= this.size || j - 2 < 0) return false;
    else if (
      this.cells[i + 1][j - 1].figure !== null &&
      this.cells[i + 1][j - 1].figure.color !== this.game.player &&
      this.cells[i + 2][j - 2].figure === null
    )
      return [this.cells[i + 1][j - 1], [this.cells[i + 2][j - 2]]];
    return false;
  }

  canAttackBottomRight(i, j) {
    if (i + 2 >= this.size || j + 2 >= this.size) return false;
    else if (
      this.cells[i + 1][j + 1].figure !== null &&
      this.cells[i + 1][j + 1].figure.color !== this.game.player &&
      this.cells[i + 2][j + 2].figure === null
    )
      return [this.cells[i + 1][j + 1], [this.cells[i + 2][j + 2]]];
    return false;
  }

  canKingAttackTopLeft(i, j) {
    const arr = [];
    let found = false;
    let cell;
    for (let a = 1; a <= this.size; a++) {
      if (i - a < 0 || j - a < 0) return [cell, arr];
      else if (!found && this.cells[i - a][j - a].figure !== null) {
        if (this.cells[i - a][j - a].figure.color === this.game.player)
          return [cell, arr];
        found = true;
        cell = this.cells[i - a][j - a];
      } else if (found && this.cells[i - a][j - a].figure === null) {
        arr.push(this.cells[i - a][j - a]);
      } else if (found && this.cells[i - a][j - a].figure !== null) {
        return [cell, arr];
      }
    }
    return [cell, arr];
  }

  canKingAttackTopRight(i, j) {
    let found = false;
    let cell;
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (i - a < 0 || j + a >= this.size) return [cell, arr];
      else if (!found && this.cells[i - a][j + a].figure !== null) {
        if (this.cells[i - a][j + a].figure.color === this.game.player)
          return [cell, arr];
        found = true;
        cell = this.cells[i - a][j + a];
      } else if (found && this.cells[i - a][j + a].figure === null) {
        arr.push(this.cells[i - a][j + a]);
      } else if (found && this.cells[i - a][j + a].figure !== null) {
        return [cell, arr];
      }
    }
    return [cell, arr];
  }

  canKingAttackBottomLeft(i, j) {
    let found = false;
    let cell;
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (i + a >= this.size || j - a < 0) return [cell, arr];
      else if (!found && this.cells[i + a][j - a].figure !== null) {
        if (this.cells[i + a][j - a].figure.color === this.game.player)
          return [cell, arr];
        found = true;
        cell = this.cells[i + a][j - a];
      } else if (found && this.cells[i + a][j - a].figure === null) {
        arr.push(this.cells[i + a][j - a]);
      } else if (found && this.cells[i + a][j - a].figure !== null) {
        return [cell, arr];
      }
    }
    return [cell, arr];
  }

  canKingAttackBottomRight(i, j) {
    let found = false;
    let cell;
    const arr = [];
    for (let a = 1; a <= this.size; a++) {
      if (i + a >= this.size || j + a >= this.size) return [cell, arr];
      else if (!found && this.cells[i + a][j + a].figure !== null) {
        if (this.cells[i + a][j + a].figure.color === this.game.player)
          return [cell, arr];
        found = true;
        cell = this.cells[i + a][j + a];
      } else if (found && this.cells[i + a][j + a].figure === null) {
        arr.push(this.cells[i + a][j + a]);
      } else if (found && this.cells[i + a][j + a].figure !== null) {
        return [cell, arr];
      }
    }
    return [cell, arr];
  }

  getPossibleAttacks() {
    const possibleAttacks = [];

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (
          this.cells[i][j].figure === null ||
          this.cells[i][j].figure.color !== this.game.player
        )
          continue;

        if (
          (this.cells[i][j].figure.isKing &&
            this.figureLastAttacked === null) ||
          (this.figureLastAttacked !== null &&
            this.figureLastAttacked.isKing &&
            JSON.stringify(this.figureLastAttacked) ===
              JSON.stringify(this.cells[i][j].figure))
        ) {
          let figurePossibleAttacks = [
            this.canKingAttackTopLeft(i, j),
            this.canKingAttackTopRight(i, j),
            this.canKingAttackBottomLeft(i, j),
            this.canKingAttackBottomRight(i, j),
          ];

          figurePossibleAttacks = figurePossibleAttacks.filter(
            (item) => item[0] && item[1].length
          );

          if (figurePossibleAttacks.length)
            possibleAttacks.push([
              this.cells[i][j].figure,
              ...figurePossibleAttacks,
            ]);
        } else if (
          (!this.cells[i][j].figure.isKing &&
            this.figureLastAttacked === null) ||
          (this.figureLastAttacked !== null &&
            !this.figureLastAttacked.isKing &&
            JSON.stringify(this.figureLastAttacked) ===
              JSON.stringify(this.cells[i][j].figure))
        ) {
          let figurePossibleAttacks = [
            this.canAttackTopLeft(i, j),
            this.canAttackTopRight(i, j),
            this.canAttackBottomLeft(i, j),
            this.canAttackBottomRight(i, j),
          ];
          figurePossibleAttacks = figurePossibleAttacks.filter((el) => !!el);

          if (figurePossibleAttacks.length)
            possibleAttacks.push([
              this.cells[i][j].figure,
              ...figurePossibleAttacks,
            ]);
        }
      }
    }
    this.possibleAttacks = possibleAttacks;
  }

  markPossibleAttacks() {
    this.possibleAttacks.forEach((item) => {
      item.forEach((posAtt, index) => {
        if (index) {
          posAtt[1].forEach((cell) => {
            document
              .querySelector(`[data-cell-cord="${cell.x},${cell.y}"]`)
              .classList.add("dot_red");
          });
        }
      });
    });
  }

  clearCellStyles(styles) {
    document
      .querySelectorAll(".game__cell")
      .forEach((cell) => cell.classList.remove(...styles));
  }

  markPossibleMoves() {
    document.querySelectorAll(".game__cell").forEach((cell) => {
      const cellCords = cell.getAttribute("data-cell-cord");
      this.possibleMoves.forEach((posCell) => {
        if (cellCords === `${posCell.x},${posCell.y}`) {
          cell.classList.add("dot_green");
        }
      });
    });
  }

  markSelectedFigureCell() {
    document
      .querySelector(
        `[data-cell-cord="${this.selectedFigure.x},${this.selectedFigure.y}"]`
      )
      .classList.add("mark");
  }

  checkFigureGameColor(target) {
    const cellCords = target.parentElement
      .getAttribute("data-cell-cord")
      .split(",")
      .map((i) => +i);

    return (
      this.cells[cellCords[0]][cellCords[1]].figure.color === this.game.player
    );
  }

  checkCellMoveTo(target) {
    const cellCords = target
      .getAttribute("data-cell-cord")
      .split(",")
      .map((i) => +i);

    const cell = this.cells[cellCords[0]][cellCords[1]];

    return this.possibleMoves.some(
      (posCell) => JSON.stringify(posCell) === JSON.stringify(cell)
    );
  }

  checkCellAttackTo() {
    let correct = false;

    this.possibleAttacks.forEach((item) => {
      if (JSON.stringify(item[0]) === JSON.stringify(this.selectedFigure)) {
        item.forEach((posArr, index) => {
          if (index) {
            posArr[1].forEach((possAttackCell) => {
              if (
                JSON.stringify(this.selectedCell) ===
                JSON.stringify(possAttackCell)
              ) {
                correct = true;
              }
            });
          }
        });
      }
    });

    return correct;
  }

  moveFigure() {
    const figure = this.selectedFigure;
    const cell = this.selectedCell;

    this.cells[figure.x][figure.y].figure = null;
    figure.x = cell.x;
    figure.y = cell.y;
    this.cells[cell.x][cell.y].figure = figure;
    this.figureLastAttacked = null;
  }

  attackFigure() {
    this.possibleAttacks.forEach((posAtt, index) => {
      if (JSON.stringify(posAtt[0]) === JSON.stringify(this.selectedFigure)) {
        posAtt.forEach((a) => {
          if (a.length) {
            // console.log(a);
            a.forEach((b) => {
              let foundFigureToDelete = false;
              // console.log(b);
              if (b.length) {
                b.forEach((c) => {
                  // console.log(c);
                  if (JSON.stringify(c) === JSON.stringify(this.selectedCell)) {
                    foundFigureToDelete = true;
                  }
                });
              }
              if (foundFigureToDelete) {
                const figureToDelete = a[0];
                this.cells[this.selectedFigure.x][
                  this.selectedFigure.y
                ].figure = null;
                this.cells[figureToDelete.x][figureToDelete.y].figure = null;
                this.cells[this.selectedCell.x][this.selectedCell.y].figure =
                  this.selectedFigure;
                this.cells[this.selectedCell.x][this.selectedCell.y].figure.x =
                  this.selectedCell.x;
                this.cells[this.selectedCell.x][this.selectedCell.y].figure.y =
                  this.selectedCell.y;
                this.figureLastAttacked =
                  this.cells[this.selectedCell.x][this.selectedCell.y].figure;
              }
            });
          }
        });
      }
    });
  }

  setKing() {
    this.cells.forEach((row) => {
      row.forEach((cell) => {
        if (
          cell.figure !== null &&
          ((cell.x === 0 && cell.figure.color === "white") ||
            (cell.x === this.size - 1 && cell.figure.color === "black")) &&
          !cell.figure.isKing
        ) {
          this.cells[cell.x][cell.y].figure.isKing = true;
        }
      });
    });
  }

  renderBoard() {
    let html = "";
    this.cells.forEach((row, rowIndex) => {
      row.forEach((cell, cellIndex) => {
        let kingClass = "";
        if (cell.figure && cell.figure.isKing) {
          cell.figure.color === "white"
            ? (kingClass = "king black-crown")
            : (kingClass = "king white-crown");
        }
        const cellHTML = `
          <div class="game__cell ${cell.color}" data-cell-cord="${[
          rowIndex,
          cellIndex,
        ]}">
            ${
              cell.figure
                ? `<div class="game__figure ${
                    cell.figure.color
                  } ${kingClass}" data-figure-cord="${[rowIndex, cellIndex]}">
                    ${
                      kingClass
                        ? `
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="1280pt" height="815pt" viewBox="0 0 1280.000000 815.000000"
                    preserveAspectRatio="xMidYMid meet">
                      <metadata>
                      Created by potrace 1.15, written by Peter Selinger 2001-2017
                      </metadata>
                      <g transform="translate(0.000000,815.000000) scale(0.100000,-0.100000)"
                      fill="#000000" stroke="none">
                      <path d="M6224 8131 c-137 -37 -202 -83 -331 -229 -139 -159 -190 -310 -179
                      -527 9 -184 62 -316 185 -461 38 -44 91 -97 118 -117 55 -40 169 -97 195 -97
                      9 0 19 -4 22 -9 10 -16 -743 -2610 -779 -2686 -48 -100 -88 -150 -141 -176
                      -41 -19 -50 -20 -86 -10 -55 17 -124 88 -185 191 -27 47 -343 465 -702 929
                      l-652 845 46 39 c209 179 315 387 315 617 0 172 -47 303 -159 442 -132 164
                      -238 240 -389 279 -133 34 -263 18 -402 -49 -58 -28 -93 -55 -159 -122 -136
                      -139 -209 -256 -242 -390 -17 -71 -17 -249 0 -320 19 -77 81 -207 132 -276
                      116 -158 250 -254 404 -291 39 -9 71 -17 72 -18 3 -2 -194 -1964 -203 -2020
                      -12 -74 -54 -192 -84 -233 -75 -104 -178 -97 -335 23 -38 29 -385 259 -770
                      510 -385 251 -706 463 -713 470 -11 10 -8 21 22 63 142 197 175 498 79 726
                      -83 199 -274 374 -468 432 -73 21 -217 24 -295 5 -30 -7 -93 -31 -140 -53 -71
                      -35 -100 -56 -180 -137 -74 -74 -105 -115 -137 -176 -68 -131 -78 -178 -78
                      -355 0 -135 3 -165 24 -230 98 -314 354 -513 661 -513 109 -1 171 15 268 68
                      35 20 65 35 67 33 5 -7 275 -516 383 -723 327 -629 481 -1071 562 -1610 6 -38
                      13 -82 16 -98 l6 -27 4398 0 4397 0 7 52 c12 95 76 400 112 535 77 294 201
                      611 374 962 103 209 458 890 471 905 4 5 21 -1 37 -13 80 -56 244 -98 346 -87
                      174 20 302 81 426 206 47 47 100 111 119 142 197 336 129 725 -172 978 -77 65
                      -183 121 -267 141 -71 17 -200 17 -270 0 -127 -31 -278 -131 -375 -249 -124
                      -150 -172 -298 -162 -504 7 -163 52 -301 134 -416 25 -36 30 -49 20 -58 -6 -6
                      -330 -218 -718 -471 -388 -254 -737 -485 -775 -514 -89 -67 -137 -89 -200 -89
                      -94 0 -157 69 -194 214 -14 57 -48 371 -115 1089 -52 555 -95 1013 -95 1018 0
                      5 7 9 14 9 38 0 179 54 233 89 118 76 246 231 299 363 69 168 72 395 7 558
                      -39 98 -87 165 -193 271 -107 107 -188 155 -315 185 -135 31 -299 2 -432 -78
                      -70 -42 -202 -174 -258 -258 -147 -223 -146 -563 4 -792 49 -76 137 -171 206
                      -225 l40 -30 -31 -39 c-288 -365 -1292 -1681 -1329 -1743 -56 -93 -138 -175
                      -185 -184 -77 -16 -158 60 -216 203 -12 30 -76 240 -142 465 -66 226 -238 810
                      -382 1300 -143 489 -258 895 -256 902 3 7 12 13 20 13 7 0 51 18 96 41 100 50
                      237 180 294 279 116 199 139 467 59 670 -74 188 -263 377 -432 431 -96 31
                      -271 36 -367 10z"/>
                      <path d="M1990 660 l0 -660 4395 0 4395 0 2 660 3 660 -4397 0 -4398 0 0 -660z"/>
                      </g>
                    </svg>
                  </div>
                    `
                        : ""
                    }
                  </div>
                  `
                : ""
            }
          </div>
        `;
        html += cellHTML;
      });
    });
    this.container.innerHTML = html;
  }
}
