import { Model, Schema } from 'mongoose';
import { UserModel } from '../../domain/model/user.model';

export class User implements UserModel {
  public userId: string;
  public name: string;
  public email: string;
  public password: string;
}

export const UserSchema = new Schema(User);
export const userModel = new Model(User.name, UserSchema);
