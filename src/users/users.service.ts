import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  findAll() {
    // return 'This is going to return a list of users from UsersService';
    return this.usersRepository.find();
  }

  async getById(id: number): Promise<UserEntity> {
    return this.usersRepository.findOne({ where: { id } });
  }
}
