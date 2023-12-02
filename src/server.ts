import app from "./app";
import { Server } from "socket.io";
import { createServer } from "node:http";
import { ConnectionListner } from "./linsteners";
const PORT = process.env.API_PORT || 3000;
const server = createServer(app);
const io = new Server(server);
server.listen(PORT, () => {
  console.log(`Chat Server API is running port.... ${PORT}`);
});
io.sockets.on("connection", function (socket) {
  ConnectionListner.onConnect(socket);
});
