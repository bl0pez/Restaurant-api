import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetAllUsersUseCase } from 'src/users/application/usecase/get-all-users.usecase';
import { UserWithoutPasswordDto } from '../dto/user-without-password.dto';

@ApiTags('users')
@Controller('api/v1/users')
export class GetAllUsersController {
  public constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    type: UserWithoutPasswordDto,
    isArray: true,
  })
  @Get()
  public async run(): Promise<UserWithoutPasswordDto[]> {
    return this.getAllUsersUseCase.run();
  }
}
