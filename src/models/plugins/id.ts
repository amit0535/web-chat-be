import { Schema } from "mongoose";

export default function id(schema: Schema, options) {
  schema
    .virtual("id")
    .get(function () {
       return this._id;
    })
    .set(function (id) {
      this._id = id;
    });
}
