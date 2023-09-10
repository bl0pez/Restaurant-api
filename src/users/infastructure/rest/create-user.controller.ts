import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/users/application/usecase/create-user.usecase';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';

@Controller('api/v1/users')
export class CreateUserController {
  public constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  public async run(
    @Body() dto: CreateUserDto,
  ): Promise<UserWithoutPasswordDto> {
    return this.createUserUseCase.run(dto);
  }
}
