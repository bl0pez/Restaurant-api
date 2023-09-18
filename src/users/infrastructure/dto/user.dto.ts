import { ApiProperty, OmitType } from '@nestjs/swagger';
import { IsEmail, IsString, Matches, MinLength } from 'class-validator';

export class UserDto {
  @ApiProperty({ example: '1', description: 'User id' })
  public readonly userId: string;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  @IsString()
  @MinLength(3)
  public readonly name: string;

  @ApiProperty({ example: 'JohnDoe', description: 'User email' })
  @IsEmail()
  public readonly email: string;

  @ApiProperty({ example: 'admin', description: 'User role' })
  public readonly role: string;

  @ApiProperty({ example: '123456', description: 'User password' })
  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
    message:
      'Password must contain at least 6 characters, one uppercase letter, one lowercase letter and one number',
  })
  public readonly password: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    description: 'User created at',
  })
  public readonly createdAt: Date;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    description: 'User updated at',
  })
  public readonly updatedAt: Date;
}

export class CreateUserDto extends OmitType(UserDto, [
  'createdAt',
  'role',
  'updatedAt',
  'userId',
] as const) {}
