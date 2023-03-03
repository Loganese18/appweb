import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { UsersModule } from './users/users.module';
import { WatchedModule } from './watched/watched.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_appweb',
      synchronize: false,
      autoLoadEntities: true,
    }),
    MoviesModule,
    UsersModule,
    WatchedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
