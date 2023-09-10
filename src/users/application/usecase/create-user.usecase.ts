import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { v4 as uuid } from 'uuid';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/users/domain/dto/user.dto';
import { UserMapper } from '../mapper/user.mapper';
import { UserEntity } from 'src/users/domain/entity/user.entity';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';

@Injectable()
export class CreateUserUseCase {
  public constructor(
    @Inject('USER_REPOSITORY') private readonly repository: UserRepository,
  ) {}

  public async run(
    data: Omit<UserDto, 'userId'>,
  ): Promise<UserWithoutPasswordDto> {
    const user: UserEntity = {
      userId: uuid(),
      name: data.name,
      email: data.email,
      password: bcrypt.hashSync(data.password as string, 10),
    };

    return UserMapper.toDtowithoutPassword(await this.repository.save(user));
  }
}
