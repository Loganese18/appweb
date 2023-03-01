import { Injectable } from '@nestjs/common';
import { Get, Post, Body, Param } from '@nestjs/common';
import { Usuario } from './usuarios.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, FindManyOptions } from 'typeorm';
import { UsuarioInterface } from './usuarios.interface';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly UsuarioRepository: Repository<Usuario>,
    ) { }

    @Post()
    async create(usuario: UsuarioInterface): Promise<Usuario> {
        const nuevoUsuario = this.UsuarioRepository.create(usuario as DeepPartial<Usuario>);
        return this.UsuarioRepository.save(nuevoUsuario);
    }

    async delete(NombreUsuario: string): Promise<void> {
        await this.UsuarioRepository.delete(NombreUsuario);
    }

    @Get(':activos')
    async getUsuariosActivos(): Promise<Usuario[]> {
        const usuariosActivos = await this.UsuarioRepository.find({
            where: { Suscripcion: 'Active' }
        } as FindManyOptions);
        return usuariosActivos;
    }
}