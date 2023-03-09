import { Body, Controller, Delete, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './create.user.dto';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async get(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getOne(@Param() params): Promise<UserEntity> {
    return this.usersService.getById(params.id);
  }

  @Post()
  async createUser(@Body() CreateUserDto: CreateUserDto) {
    const user = await this.usersService.createUser(CreateUserDto);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user,
    };
  }

  @Delete(':id')
  async deleteUser(@Param() params) {
    await this.usersService.deleteUser(params.id);
  }
}
