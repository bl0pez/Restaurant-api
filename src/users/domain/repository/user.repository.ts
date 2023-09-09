import { UserModel } from '../model/user.model';

export interface UserRepository {
  save(user: Omit<UserModel, 'userId'>): Promise<UserModel>;
  findAll(): Promise<UserModel[]>;
  findById(userId: string): Promise<UserModel | null>;
  deleteById(userId: string): Promise<void>;
  findByEmail(email: string): Promise<UserModel | null>;
}
