import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserEntity } from 'src/users/domain/entity/user.entity';

@Schema({
  versionKey: false,
})
export class User implements UserEntity {
  @Prop()
  userId: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
