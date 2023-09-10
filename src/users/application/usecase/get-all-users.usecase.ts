import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { UserMapper } from '../mapper/user.mapper';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';

@Injectable()
export class GetAllUsersUseCase {
  public constructor(
    @Inject('USER_REPOSITORY') private readonly repository: UserRepository,
  ) {}

  public async run(): Promise<UserWithoutPasswordDto[]> {
    const users = await this.repository.findAll();

    return users.map((user) => UserMapper.toDtoWithoutPassword(user));
  }
}
