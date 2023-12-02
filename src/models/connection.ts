import mongoose from "mongoose";
import { echo, id, toJSON } from "./plugins";
const { MONGODB_URI } = process.env;
mongoose.connect(MONGODB_URI).then(() => console.log("Connected to mongodb"));
mongoose.plugin(id);
mongoose.plugin(echo);
mongoose.plugin(toJSON);
