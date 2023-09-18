import { UserDto } from 'src/users/infrastructure/dto/user.dto';

export interface IGetAllUsersUseCase {
  run(): Promise<UserDto[]>;
}
