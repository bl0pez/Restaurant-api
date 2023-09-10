import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';
import { UserDto } from 'src/users/domain/dto/user.dto';
import { UserEntity } from 'src/users/domain/entity/user.entity';

export abstract class UserMapper {
  public static toDto(user: UserEntity): UserDto {
    return {
      userId: user.userId,
      name: user.name,
      email: user.email,
      password: user.password,
    };
  }

  public static toDtowithoutPassword(user: UserEntity): UserWithoutPasswordDto {
    return {
      userId: user.userId,
      name: user.name,
      email: user.email,
    };
  }

  public static toPersistence(user: UserDto): UserEntity {
    return {
      userId: user.userId,
      name: user.name,
      email: user.email,
      password: user.password as string,
    };
  }
}
