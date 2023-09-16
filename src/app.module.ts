import { Module } from '@nestjs/common';
import { CONFIG_DATABASE } from './common/infrastructure/config-database';

@Module({
  imports: [CONFIG_DATABASE()],
})
export class AppModule {}
