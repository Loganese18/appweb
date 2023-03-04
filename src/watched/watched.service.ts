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
    return 'returns all entries from watched table';
  }
}
