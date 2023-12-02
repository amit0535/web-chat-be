import { Schema } from "mongoose";

export default function toJSON(schema: Schema, options) {
  schema.set("toJSON", {
    versionKey: false,
    virtuals: true,
    transform: function (doc, ret) {
      delete ret._id;
      delete ret.password;
    },
  });
}
