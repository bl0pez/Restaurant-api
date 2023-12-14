import { Inject, Injectable } from '@nestjs/common';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { UserMapper } from '../mapper/user.mapper';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class GetUserByEmailUseCase {
  public constructor(
    @Inject('USER_REPOSITORY') private readonly repository: UserRepository,
  ) {}

  public async run(userEmail: string): Promise<UserWithoutPasswordDto> {
    const user = await this.repository.findByEmail(userEmail);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    return UserMapper.toDtoWithoutPassword(user);
  }
}
