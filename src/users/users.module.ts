import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/common/domain/entities/user.entity';
import { GetAllUsersUseCase } from './application/usecase/get-all-users.usecase';
import { UserRepository } from './domain/repository/user.repository';
import { OrmUserRepository } from 'src/common/domain/repository/orm-user.repository';
import { GetAllUsersController } from './infrastructure/rest/get-all-users.controller';
import { CreateUserController } from './infrastructure/rest/create-user.controller';
import { CreateUserUseCase } from './application/usecase/create-user.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    GetAllUsersUseCase,
    CreateUserUseCase,
    UserRepository,
    OrmUserRepository,
  ],
  controllers: [GetAllUsersController, CreateUserController],
})
export class UsersModule {}
