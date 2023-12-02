export interface IUser {
  id: string;
  username: string;
  password: string;
  isPasswordValid(password: string): boolean;
}
