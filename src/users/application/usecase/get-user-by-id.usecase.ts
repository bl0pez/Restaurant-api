import { Inject, Injectable } from '@nestjs/common';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { UserMapper } from '../mapper/user.mapper';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class GetUserByIdUseCase {
  public constructor(
    @Inject('USER_REPOSITORY') private readonly repository: UserRepository,
  ) {}

  public async run(userId: string): Promise<UserWithoutPasswordDto> {
    const user = await this.repository.findById(userId);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return UserMapper.toDtoWithoutPassword(user);
  }
}
