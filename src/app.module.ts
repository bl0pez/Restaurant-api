import { Module } from '@decorators/server';
import { HttpModule } from '@decorators/server/http';
import { ExpressAdapter } from '@decorators/server/express';

@Module({
  modules: [HttpModule.create(ExpressAdapter)],
})
export class AppModule {}
