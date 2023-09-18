import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { IOrmUserRepository } from './orm-user-repository.interface';
import {
  IUserCreateRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

@Injectable()
export class OrmUserRepository
  extends Repository<UserEntity>
  implements IOrmUserRepository
{
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  findAllUsers(): Promise<IUserRepositoryDto[]> {
    return this.find();
  }
  saveUser(createUser: IUserCreateRepositoryDto): Promise<IUserRepositoryDto> {
    return this.save(createUser);
  }
}
