import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WatchedEntity } from './watched.entity';

@Injectable()
export class WatchedService {
  constructor(
    @InjectRepository(WatchedEntity)
    private watchedRepository: Repository<WatchedEntity> //VER RELACIONES ENTIDADES
  ) {}

  getAll() {
    return this.watchedRepository.find();
  }

  async getTitlesByUserName(username: string): Promise<string[]> {
    const watchedTitles = await this.watchedRepository.find({
      where:{userName: username},
      select: ['title'],
    })
    return watchedTitles.map((w)=>w.title);
  }
}
