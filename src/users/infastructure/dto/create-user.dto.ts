import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Match } from 'src/common/decorator/mach.decorator';
import { UserDto } from 'src/users/domain/dto/user.dto';

export class CreateUserDto implements Omit<UserDto, 'userId'> {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'john.doe@mail.com' })
  @IsString()
  email: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  password: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  @Match('password')
  confirmPassword: string;
}
