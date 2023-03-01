import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuarios/usuarios.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UsuariosController } from './usuarios/usuarios.controller';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuarioInterface } from './usuarios/usuarios.interface';
import { Movies } from './movies/movies.entity';
import { Vistas } from './vistas/vistas.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "db_appweb",
      "entities": [Usuario, Movies, Vistas],
      "synchronize": false,
    }),
    UsuariosModule,
  ],
  controllers: [AppController, UsuariosController],
  providers: [AppService, UsuariosService],
})
export class AppModule { }
