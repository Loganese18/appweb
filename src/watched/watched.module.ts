import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { WatchedController } from './watched.controller';
import { WatchedEntity } from './watched.entity';
import { WatchedService } from './watched.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([WatchedEntity, UserEntity])],
  controllers: [WatchedController],
  providers: [WatchedService, UsersService],
})
export class WatchedModule {}
