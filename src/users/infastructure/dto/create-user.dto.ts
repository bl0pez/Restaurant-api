import { IsString } from 'class-validator';
import { Match } from 'src/common/decorator/mach.decorator';
import { UserDto } from 'src/users/domain/dto/user.dto';

export class CreateUserDto implements Omit<UserDto, 'userId'> {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @Match('password')
  confirmPassword: string;
}
