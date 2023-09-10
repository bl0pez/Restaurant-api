import { UserEntity } from '../entity/user.entity';

export interface UserRepository {
  save(user: UserEntity): Promise<UserEntity>;
  findAll(): Promise<UserEntity[]>;
  findById(userId: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  delete(userId: string): Promise<void>;
}
