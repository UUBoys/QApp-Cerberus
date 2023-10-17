import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (plainPassword: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(plainPassword, hash);
};