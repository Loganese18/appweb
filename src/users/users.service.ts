import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create.user.dto';
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

  async createUser(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const { userName, firstName, lastName, age, gender, email, suscription } =
      CreateUserDto;
    const user = new UserEntity();
    user.userName = userName;
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.gender = gender;
    user.email = email;
    user.suscription = suscription;
    return await this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User with id ' + id + ' not found.');
    }
    await this.usersRepository.remove(user);
  }
}
