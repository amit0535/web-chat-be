import { Schema, model } from "mongoose";
import { IMovie } from "@/interfaces";

const movieSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, min: 1, max: 86400 }, //in seconds
  releaseYear: { type: Number, min: 1800, max: 2050 },
  rating: { type: Number, min: 1, max: 10 },
  meta: {
    votes: Number,
    favs: Number,
  },
});

export default model<IMovie>("Movie", movieSchema);
