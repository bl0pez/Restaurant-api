import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from 'src/users/domain/entity/user.entity';
import { UserRepository } from 'src/users/domain/repository/user.repository';
import { User } from '../entity/user.entity';

@Injectable()
export class MongoUserRepository implements UserRepository {
  public constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  public save(user: UserEntity): Promise<UserEntity> {
    return this.userModel.create(user);
  }

  public findAll(): Promise<UserEntity[]> {
    return this.userModel.find().exec();
  }

  public findById(userId: string): Promise<UserEntity | null> {
    return this.userModel.findById(userId).exec();
  }

  public findByEmail(email: string): Promise<UserEntity | null> {
    return this.userModel.findOne({ email }).exec();
  }

  public delete(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
