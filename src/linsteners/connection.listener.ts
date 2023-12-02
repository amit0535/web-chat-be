import { Socket } from "socket.io";

export default class ConnectionListner {
  public static async onConnect(socket: Socket) {
    socket.on("message:create", (data) => {});
    socket.on("message:update", (data) => {});
    socket.on("message:delete", (data) => {});
  }
  public static async onDisconnect(socket: Socket) {}
}
