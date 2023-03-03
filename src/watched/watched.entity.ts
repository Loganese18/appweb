import { MovieEntity } from 'src/movies/movie.entity';
import { UserEntity } from 'src/users/user.entity';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('watched', { schema: 'db_appweb' })
export class WatchedEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'userName', length: 70 })
  userName: string;
  @Column('varchar', { name: 'title', length: 70 })
  title: string;

  @ManyToOne(() => UserEntity, (users) => users.userName)
  users: UserEntity[];
  @ManyToOne(() => MovieEntity, (movies) => movies.title)
  movies: MovieEntity[];
}
