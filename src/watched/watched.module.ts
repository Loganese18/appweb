import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchedEntity } from './watched.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WatchedEntity])],
})
export class WatchedModule {}
