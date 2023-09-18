import { Inject, Injectable } from '@nestjs/common';
import { IOrmUserRepository } from 'src/common/domain/repository/orm-user-repository.interface';
import { OrmUserRepository } from 'src/common/domain/repository/orm-user.repository';
import { ICrudUserRepository } from './user.interface';
import {
  ISaveUserRepositoryModel,
  IUserRepositoryModel,
} from '../models/user-repository.model';

@Injectable()
export class UserRepository implements ICrudUserRepository {
  constructor(
    @Inject(OrmUserRepository)
    private readonly ormUserRepository: IOrmUserRepository,
  ) {}
  public saveUser(
    createUser: ISaveUserRepositoryModel,
  ): Promise<IUserRepositoryModel> {
    return this.ormUserRepository.saveUser(createUser);
  }

  public getAllUsers(): Promise<IUserRepositoryModel[]> {
    return this.ormUserRepository.findAllUsers();
  }
}
