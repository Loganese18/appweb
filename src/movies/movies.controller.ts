import { Controller, Get, Param } from '@nestjs/common';
import { MovieEntity } from './movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async get(): Promise<MovieEntity[]> {
    return this.moviesService.findAll();
  }

  @Get(':id')
  async getMovieById(@Param() param): Promise<MovieEntity> {
    return this.moviesService.getMovieById(param.id);
  }
}
