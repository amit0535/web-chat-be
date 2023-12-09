import { IRoom, RoomType } from "@/interfaces";
import { Schema, model } from "mongoose";

const roomSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  type: { type: String },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model<IRoom>("Room", roomSchema);
