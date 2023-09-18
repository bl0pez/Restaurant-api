import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllUsersUseCase } from '../../application/usecase/get-all-users.usecase';
import { IGetAllUsersUseCase } from 'src/users/application/usecase/get-all-users.usecase.interface';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from '../dto/user.dto';

@ApiTags('users')
@Controller('users')
export class GetAllUsersController {
  constructor(
    @Inject(GetAllUsersUseCase)
    private readonly getAllUsersService: IGetAllUsersUseCase,
  ) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Get all users.', type: UserDto })
  @Get()
  run(): Promise<UserDto[]> {
    return this.getAllUsersService.run();
  }
}
