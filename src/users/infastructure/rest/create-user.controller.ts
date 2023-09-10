import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/users/application/usecase/create-user.usecase';
import { CreateUserDto } from '../dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserWithoutPasswordDto } from '../dto/user-without-password.dto';

@ApiTags('users')
@Controller('api/v1/users')
export class CreateUserController {
  public constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    type: UserWithoutPasswordDto,
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async run(
    @Body() dto: CreateUserDto,
  ): Promise<UserWithoutPasswordDto> {
    return this.createUserUseCase.run(dto);
  }
}
