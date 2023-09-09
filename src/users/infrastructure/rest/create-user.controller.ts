import { Controller } from '@decorators/server';
import { Get, Response } from '@decorators/server/http';
import { CreateUserUseCase } from '../../application/usecases/create-user.usecase';
import { Response as ExpressResponse } from 'express';

@Controller('/api/v1/users')
export class CreateUserController {
  public constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Get('/')
  public async run(@Response() res: ExpressResponse) {
    return res.json([]);
  }
}
