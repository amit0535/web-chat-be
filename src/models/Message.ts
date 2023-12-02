import { Schema, model } from "mongoose";
import { IMessage, MediaType } from "@/interfaces";

const messageSchema = new Schema({
  roomId: { type: Schema.Types.ObjectId, ref: "Room" },
  senderId: { type: Schema.Types.ObjectId, ref: "User" },
  mediaType: { type: MediaType },
  releaseYear: { type: Number, min: 1800, max: 2050 },
  rating: { type: Number, min: 1, max: 10 },
  meta: {
    votes: Number,
    favs: Number,
  },
});

export default model<IMessage>("Message", messageSchema);
