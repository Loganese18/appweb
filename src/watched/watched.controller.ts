import { Controller, Get } from '@nestjs/common';
import { WatchedService } from './watched.service';

@Controller('watched')
export class WatchedController {
  constructor(private watchedService: WatchedService) {}

  @Get()
  get() {
    return this.watchedService.getAll();
  }
}
