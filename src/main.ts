import { Application } from '@decorators/server';
import { AppModule } from './app.module';
import { HttpModule } from '@decorators/server/http';
import * as express from 'express';
import { connectDb } from './database';

async function bootstrap() {
  const app = await Application.create(AppModule);
  const module = await app.inject<HttpModule>(HttpModule);
  module.use(express.json());
  await module.listen(3000);
  await connectDb();
}

bootstrap()
  .then(() => console.log('Server is running at http://localhost:3000'))
  .catch(console.error);
