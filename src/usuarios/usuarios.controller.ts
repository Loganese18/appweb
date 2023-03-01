import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { query } from 'express';
import { CreateUsuarioDto } from './dto/CreateUsuario.dto';
import { ListaUsuariosDto } from './dto/ListaUsuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    @Post()
    async create(@Body() createUsuarioDto: CreateUsuarioDto) {
        return 'Agrega un usuario';
    }

    @Get()
    async findAll(): Promise<string> {
        return 'This action returns all usuarios)';
    }

    @Get(':Nombre')
    findaone(@Param() params) {
        return `Devuelve usuario con Nombre ${params.Nombre}`;
    }
}