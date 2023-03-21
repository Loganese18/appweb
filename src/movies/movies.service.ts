import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieEntity } from './movie.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(MovieEntity)
    private moviesRepository: Repository<MovieEntity>
  ) {}

  findAll() {
    // return 'This is going to return a list of users from UsersService';
    return this.moviesRepository.find();
  }

  getMovieById(id: number) {
    return this.moviesRepository.findOne({ where: { id } });
  }

  async getPremierMovies(): Promise<MovieEntity[]> {
    return await this.moviesRepository.find({
      take: 10,
      order: { year: 'DESC' },
      select: ['title', 'year', 'genre', 'director'],
    });
  }
}
