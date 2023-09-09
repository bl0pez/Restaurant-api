import { Controller } from '@decorators/server';
import { Get } from '@decorators/server/http';
import { CreateUserUseCase } from '../../application/usecases/create-user.usecase';

@Controller('/api/v1/users')
export class CreateUserController {
  public constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Get('/')
  public async run() {
    return 'Hello world';
  }
}
