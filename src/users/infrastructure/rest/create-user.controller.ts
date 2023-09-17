import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserUseCase } from '../../application/usecase/create-user.usecase';
import { CreateUserDto, UserDto } from '../dto/user.dto';
@ApiTags('users')
@Controller('api/v1/users')
export class CreateUserController {
  constructor(
    @Inject(CreateUserUseCase)
    private readonly createUserService: CreateUserUseCase,
  ) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'Create user.', type: UserDto })
  @Post()
  run(@Body() createUser: CreateUserDto): Promise<UserDto> {
    return this.createUserService.run(createUser);
  }
}
