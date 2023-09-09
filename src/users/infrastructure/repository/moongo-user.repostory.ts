import { UserModel } from 'src/users/domain/model/user.model';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { userModel } from '../model/user';
import { Injectable } from '@decorators/di';

@Injectable({
  providedIn: 'root',
})
export class MoongoUserRepository implements UserRepository {
  private readonly userModel;

  public constructor() {
    this.userModel = userModel;
  }

  public save(user: Omit<UserModel, 'userId'>): Promise<UserModel> {
    throw new Error('Method not implemented.');
  }
  public async findAll(): Promise<UserModel[]> {
    return await this.userModel.find();
  }
  public findById(userId: string): Promise<UserModel | null> {
    throw new Error('Method not implemented.');
  }
  public deleteById(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  public findByEmail(email: string): Promise<UserModel | null> {
    throw new Error('Method not implemented.');
  }
}
