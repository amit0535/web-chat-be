import { Schema, Types } from "mongoose";

export default function echo(schema: Schema, options) {
  schema.statics.echo = function (id) {
    console.log("echpo", id);
  };
}
