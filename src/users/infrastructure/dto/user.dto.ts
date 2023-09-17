import { ApiProperty, OmitType } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: '1', description: 'User id' })
  public readonly userId: string;

  @ApiProperty({ example: 'John Doe', description: 'User name' })
  public readonly name: string;

  @ApiProperty({ example: 'JohnDoe', description: 'User email' })
  public readonly email: string;

  @ApiProperty({ example: 'admin', description: 'User role' })
  public readonly role: string;

  @ApiProperty({ example: '123456', description: 'User password' })
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
  'userId',
  'createdAt',
  'updatedAt',
] as const) {}
