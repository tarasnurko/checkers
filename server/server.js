const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, ".././public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  let currentRoom;

  socket.on("joinRoom", (roomCode) => {
    currentRoom = roomCode;

    if (!io.sockets.adapter.rooms.get(roomCode)) {
      socket.join(roomCode);
    } else if (io.sockets.adapter.rooms.get(roomCode).size === 1) {
      socket.join(roomCode);
      let firstPlayerColor = getRandColor();
      let secondPlayerColor;
      firstPlayerColor === "white"
        ? (secondPlayerColor = "black")
        : (secondPlayerColor = "white");

      socket.broadcast
        .to(roomCode)
        .emit("player1", { firstPlayerColor, currentRoom });

      socket.emit("player2", { secondPlayerColor, currentRoom });
    }
  });

  socket.on("playTurn", ({ props, room }) => {
    socket.broadcast.to(currentRoom).emit("turnPlay", { props, room });
    socket.emit("turnPlay", { props, room });
  });

  socket.on("restartGame", (room) => {
    let firstPlayerColor = getRandColor();
    let secondPlayerColor;
    firstPlayerColor === "white"
      ? (secondPlayerColor = "black")
      : (secondPlayerColor = "white");

    socket.broadcast
      .to(currentRoom)
      .emit("restartPlayer1", { firstPlayerColor, room });

    socket.emit("restartPlayer2", { secondPlayerColor, room });
  });

  socket.on("disconnect", () => {
    socket.broadcast.to(currentRoom).emit("playerDisconect", currentRoom);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function getRandColor() {
  const colors = ["white", "black"];
  return colors[Math.floor(Math.random() * colors.length)];
}
