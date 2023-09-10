import { ApiProperty } from '@nestjs/swagger';
import { UserWithoutPasswordDto as IUserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';

export class UserWithoutPasswordDto implements IUserWithoutPasswordDto {
  @ApiProperty({ example: '16432b1d-b3aa-4d62-be09-a242f9868366' })
  userId: string;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'john.doe@mail.com' })
  email: string;
}
