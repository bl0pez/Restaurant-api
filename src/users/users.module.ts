import { Module } from '@nestjs/common';
import { CreateUserController } from './infastructure/rest/create-user.controller';
import { CreateUserUseCase } from './application/usecase/create-user.usecase';
import { MongoUserRepository } from './infastructure/repository/mongo-user.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './infastructure/entity/user.entity';
import { GetAllUsersController } from './infastructure/rest/get-all-users.controller';
import { GetAllUsersUseCase } from './application/usecase/get-all-users.usecase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [CreateUserController, GetAllUsersController],
  providers: [
    CreateUserUseCase,
    GetAllUsersUseCase,
    {
      provide: 'USER_REPOSITORY',
      useClass: MongoUserRepository,
    },
  ],
})
export class UsersModule {}
