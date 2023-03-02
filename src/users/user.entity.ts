import { Column, Entity, Index } from 'typeorm';

@Index('id', ['nombreUsuario'], { unique: true })
@Entity('usuarios', { schema: 'db_appweb' })
export class UserEntity {
  @Column('varchar', { primary: true, name: 'NombreUsuario', length: 25 })
  nombreUsuario: string;

  @Column('varchar', { name: 'Nombre', nullable: true, length: 20 })
  nombre?: string;

  @Column('varchar', { name: 'Apellido', nullable: true, length: 25 })
  apellido?: string;

  @Column('smallint', { name: 'Edad', nullable: true })
  edad?: number;

  @Column('varchar', {
    name: 'Genero',
    nullable: true,
    length: 1,
    default: () => "'x'",
  })
  genero?: string;

  @Column('varchar', { name: 'Mail', length: 35 })
  mail: string;

  @Column('varchar', {
    name: 'Suscripcion',
    nullable: true,
    length: 8,
    default: () => "'Inactive'",
  })
  suscription?: string;

  // @OneToMany(() => Vistas, (vistas) => vistas.nombreUsuario2)
  // vistas: Vistas[];
}
