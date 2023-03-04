import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WatchedController } from './watched.controller';
import { WatchedEntity } from './watched.entity';
import { WatchedService } from './watched.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WatchedEntity])],
  controllers: [WatchedController],
  providers: [WatchedService],
})
export class WatchedModule {}
