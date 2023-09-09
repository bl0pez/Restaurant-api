import { Module } from '@decorators/server';
import { CreateUserController } from './infrastructure/rest/create-user.controller';
import { CreateUserUseCase } from './application/usecases/create-user.usecase';

@Module({
  controllers: [CreateUserController],
  providers: [CreateUserUseCase],
})
export class UsersModule {}
