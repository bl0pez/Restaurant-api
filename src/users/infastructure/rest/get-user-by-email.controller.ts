import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserWithoutPasswordDto } from '../dto/user-without-password.dto';
import { GetUserByEmailUseCase } from 'src/users/application/usecase/get-user-by-email.usecase';

@ApiTags('users')
@Controller('api/v1/users')
export class GetUserByEmailController {
  public constructor(
    private readonly getUserByEmailUseCase: GetUserByEmailUseCase,
  ) {}

  @ApiOperation({ summary: 'Get user by email' })
  @ApiResponse({
    status: 200,
    type: UserWithoutPasswordDto,
  })
  @Get(':email')
  public async run(
    @Param('email') email: string,
  ): Promise<UserWithoutPasswordDto> {
    return this.getUserByEmailUseCase.run(email);
  }
}
