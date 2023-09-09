import { Module } from '@decorators/server';
import { HttpModule } from '@decorators/server/http';
import { ExpressAdapter } from '@decorators/server/express';
import { UsersModule } from './users/users.module';
import { CommonModule } from './common/common.module';

@Module({
  modules: [HttpModule.create(ExpressAdapter), CommonModule, UsersModule],
})
export class AppModule {}
