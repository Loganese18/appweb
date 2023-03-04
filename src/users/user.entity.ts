import { WatchedEntity } from 'src/watched/watched.entity';
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], { unique: true })
@Index('userName', ['userName'], { unique: true })
@Index('email_UNIQUE', ['email'], { unique: true })
@Entity('users', { schema: 'db_appweb' })
export class UserEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'userName', unique: true, length: 70 })
  userName: string;

  @Column('varchar', { name: 'firstName', nullable: true, length: 50 })
  firstName: string | null;

  @Column('varchar', { name: 'lastName', nullable: true, length: 50 })
  lastName: string | null;

  @Column('smallint', { name: 'age', nullable: true })
  age: number | null;

  @Column('varchar', {
    name: 'gender',
    nullable: true,
    length: 1,
    default: () => "'x'",
  })
  gender: string | null;

  @Column('varchar', { name: 'email', unique: true, length: 100 })
  email: string;

  @Column('varchar', {
    name: 'suscription',
    nullable: true,
    length: 8,
    default: () => "'Inactive'",
  })
  suscription: string | null;

  @OneToMany(() => WatchedEntity, (watched) => watched.userName)
  watched: WatchedEntity[];
}
