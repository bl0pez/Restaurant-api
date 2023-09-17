import { CreateUserDto, UserDto } from 'src/users/infrastructure/dto/user.dto';

export interface ICreateUserUseCase {
  run(createUser: CreateUserDto): Promise<UserDto>;
}
