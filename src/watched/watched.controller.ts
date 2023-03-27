import { Controller, Delete, Get, Param } from '@nestjs/common';
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

  @Get(':userid')
  async getMoviesByUserId(@Param('userid') userid: number) {
    const user = await this.userService.getById(userid);
    const username = user.userName;
    const watchedTitles = this.watchedService.getTitlesByUserName(username);
    return watchedTitles;
  }
  @Delete(':id')
  async deleteWatchedTitle(@Param() params) {
    await this.watchedService.deleteWatchedTitle(params.id);
  }
}
