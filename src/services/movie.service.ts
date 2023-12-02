import { IMovie } from "@/interfaces";
import { Movie } from "@/models";

export default class MovieService {
  static async create({ title, releaseYear, rating }): Promise<IMovie> {
    return await Movie.create({ title, releaseYear, rating });
  }

  static async getAll({ offset, limit }) {
    const movies = await Movie.find().skip(offset).limit(limit);
    const total = await Movie.countDocuments();
    return { movies, total };
  }

  static async getOne(id: string): Promise<IMovie> {
    return await Movie.findById(id);
  }

  static async delete(id: string) {
    await Movie.deleteOne({ _id: id });
  }

  static async update(id: string, body: any): Promise<IMovie> {
    return await Movie.findByIdAndUpdate(id, body, { new: true });
  }
}
