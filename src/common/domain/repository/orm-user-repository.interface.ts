import {
  IUserCreateRepositoryDto,
  IUserRepositoryDto,
} from '../dto/user-repository.dto';

export interface IOrmUserRepository {
  findAllUsers(): Promise<IUserRepositoryDto[]>;
  saveUser(createUser: IUserCreateRepositoryDto): Promise<IUserRepositoryDto>;
}
