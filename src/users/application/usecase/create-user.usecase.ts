import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { CreateUserDto, UserDto } from 'src/users/infrastructure/dto/user.dto';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  public async run(createUser: CreateUserDto): Promise<UserDto> {
    return await this.userRepository.saveUser(createUser);
  }
}
