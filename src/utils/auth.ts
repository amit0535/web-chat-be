import bcrypt from "bcrypt";

export function getPasswordHash(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(
  plainPassword: string,
  passwordHash: string
): boolean {
  return bcrypt.compareSync(plainPassword, passwordHash);
}
