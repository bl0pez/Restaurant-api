import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserWithoutPasswordDto } from '../dto/user-without-password.dto';
import { GetUserByIdUseCase } from 'src/users/application/usecase/get-user-by-id.usecase';

@ApiTags('users')
@Controller('api/v1/users')
export class GetUserByIdController {
  public constructor(private readonly getUserByIdUseCase: GetUserByIdUseCase) {}

  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: 200,
    type: UserWithoutPasswordDto,
  })
  @Get(':id')
  public async run(@Param('id') id: string): Promise<UserWithoutPasswordDto> {
    return this.getUserByIdUseCase.run(id);
  }
}
