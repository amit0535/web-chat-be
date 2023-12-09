import { RoomService } from "@/services";
import { Request, Response } from "express";

export default class RoomController {
  static async getAll(req: Request, res: Response) {
    const { limit = 10, offset = 0 } = req.query;
    const { rooms, total } = await RoomService.getAll({ limit, offset });
    res.success({ rooms, total });
  }
}
