import { Controller, Get, Param } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async get(): Promise<UserEntity[]> {
    return this.usersService.findAll();
  }

  @Get(':username')
  async getOne(@Param() params): Promise<UserEntity> {
    return this.usersService.getByUsername(params.username);
  }
}
