import { MovieService } from "@/services";
import { Request, Response } from "express";

export default class MovieController {
  static async create(req: Request, res: Response) {
    const { title, releaseYear, rating } = req.body;
    const movie = await MovieService.create({ title, releaseYear, rating });
    res.success({ movie }, 201);
  }

  static async getAll(req: Request, res: Response) {
    const { limit = 10, offset = 0 } = req.query;
    const { movies, total } = await MovieService.getAll({ limit, offset });
    res.success({ movies, total });
  }

  static async getOne(req: Request, res: Response) {
    const id = req.params.id;
    const movie = await MovieService.getOne(id);
    res.success({ movie });
  }

  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    await MovieService.delete(id);
    res.success({ message: "deleted" });
  }

  static async update(req: Request, res: Response) {
    const movie = await MovieService.update(req.params.id, req.body);
    res.success({ movie });
  }
}
