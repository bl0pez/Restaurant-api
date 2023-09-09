import { Module } from '@decorators/server';
import { DatabaseModule } from './database/database.module';

@Module({
  modules: [DatabaseModule],
})
export class CommonModule {}
