import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "../usuarios/usuarios.entity";
import { Movies } from "../movies/movies.entity";

@Index("NombreUsuario", ["nombreUsuario"], {})
@Index("NombrePelicula", ["nombrePelicula"], {})
@Entity("vistas", { schema: "db_appweb" })
export class Vistas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "NombreUsuario", length: 25 })
  nombreUsuario: string;

  @Column("varchar", { name: "NombrePelicula", length: 50 })
  nombrePelicula: string;

  @ManyToOne(() => Usuario, (usuarios) => usuarios.vistas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "NombreUsuario", referencedColumnName: "nombreUsuario" },
  ])
  nombreUsuario2: Usuario;

  @ManyToOne(() => Movies, (movies) => movies.vistas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "NombrePelicula", referencedColumnName: "nombrePelicula" },
  ])
  nombrePelicula2: Movies;
}
