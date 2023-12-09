import { Room } from "@/models";

export default class RoomService {
  static async getAll({ offset, limit }) {
    const rooms = await Room.find().skip(offset).limit(limit);
    const total = await Room.countDocuments();
    return { rooms, total };
  }
}
