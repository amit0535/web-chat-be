import { Schema, model } from "mongoose";
import { IUser } from "@/interfaces";
import { comparePassword, getPasswordHash } from "@/utils";

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, min: 6, max: 16 },
  fullName: { type: String, min: 2, max: 24 },
  avatar: { type: String },
  email: { type: String },
  active: { type: Boolean, default: true },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (this.isModified("password") || this.isNew) {
    this.password = getPasswordHash(user.password);
    next();
  } else {
    return next();
  }
});

userSchema.methods.isPasswordValid = function (plainPassword: string) {
  return comparePassword(plainPassword, this.password);
};

export default model<IUser>("User", userSchema);
