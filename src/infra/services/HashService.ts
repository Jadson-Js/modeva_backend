import bcrypt from 'bcrypt';
import { HashSaltRounds } from '../../shared/config/environment';

export class HashService {
  static async generateHash(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, HashSaltRounds);

    return hash;
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    const isMatch = await bcrypt.compare(password, hash);

    return isMatch;
  }
}
