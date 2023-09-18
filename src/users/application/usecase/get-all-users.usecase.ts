import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { UserDto } from 'src/users/infrastructure/dto/user.dto';

@Injectable()
export class GetAllUsersUseCase {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}

  public async run(): Promise<UserDto[]> {
    return await this.userRepository.getAllUsers();
  }
}
