import { Controller, Get } from '@nestjs/common';
import { GetAllUsersUseCase } from 'src/users/application/usecase/get-all-users.usecase';
import { UserWithoutPasswordDto } from 'src/users/domain/dto/user-without-password.dto';

@Controller('api/v1/users')
export class GetAllUsersController {
  public constructor(private readonly getAllUsersUseCase: GetAllUsersUseCase) {}

  @Get()
  public async run(): Promise<UserWithoutPasswordDto[]> {
    return this.getAllUsersUseCase.run();
  }
}
