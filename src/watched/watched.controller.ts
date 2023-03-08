import { Controller, Get, Param } from '@nestjs/common';
import { title } from 'process';
import { UsersService } from 'src/users/users.service';
import { WatchedEntity } from './watched.entity';
import { WatchedService } from './watched.service';

@Controller('watched')
export class WatchedController {
  constructor(
    private watchedService: WatchedService,
    private userService: UsersService
  ) {}

  @Get()
  async get(): Promise<WatchedEntity[]> {
    return this.watchedService.getAll();
  }

  @Get(':userid/watched')
  async getMoviesByUserId(@Param('userid') userid: number) {
    const user = await this.userService.getUserNameById(userid);
    const username = user.userName;
    const watchedTitles = this.watchedService.getTitlesByUserName(username)
    return watchedTitles;
  }
}
