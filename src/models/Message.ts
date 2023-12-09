import { Schema, model } from "mongoose";
import { IMessage, ContentType } from "@/interfaces";

const messageSchema = new Schema({
  room: { type: Schema.Types.ObjectId, ref: "Room" },
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  contentType: { type: String },
  text: { type: String },
  url: { type: String },
});

export default model<IMessage>("Message", messageSchema);
