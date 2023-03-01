import { Global, Module } from "@nestjs/common";
import { UsuariosController } from "./usuarios.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuarios.entity';

@Global()
@Module({
    controllers: [UsuariosController]
})
export class UsuariosModule { }