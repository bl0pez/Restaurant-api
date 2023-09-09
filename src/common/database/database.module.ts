import { Module } from '@decorators/server';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders],
})
export class DatabaseModule {}
