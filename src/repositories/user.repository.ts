import { User } from "@/models";

export default class UserRepository {
  static async isUserNameExists(username: String): Promise<boolean> {
    const count = await User.countDocuments({ username });
    return count > 0;
  }
}
