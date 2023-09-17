import {
  ISaveUserRepositoryModel,
  IUserRepositoryModel,
} from '../models/user-repository.model';

export interface ICrudUserRepository {
  getAllUsers(): Promise<IUserRepositoryModel[]>;
  saveUser(createUser: ISaveUserRepositoryModel): Promise<IUserRepositoryModel>;
}
