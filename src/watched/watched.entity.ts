import { MovieEntity } from 'src/movies/movie.entity';
import { UserEntity } from 'src/users/user.entity';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Index('id', ['id'], { unique: true })
@Entity('watched', { schema: 'db_appweb' })
export class WatchedEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'userName' })
  userName: string;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @ManyToOne(() => UserEntity, (users) => users.watched)
  @JoinColumn({ name: 'userName' })
  user: UserEntity;

  @ManyToOne(() => MovieEntity, (movie) => movie.watched)
  @JoinColumn({ name: 'title' })
  movie: MovieEntity;
}
