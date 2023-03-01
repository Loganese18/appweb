import { Column, Entity, OneToMany } from "typeorm";
import { Vistas } from "../vistas/vistas.entity";

@Entity("movies", { schema: "db_appweb" })
export class Movies {
  @Column("varchar", { primary: true, name: "NombrePelicula", length: 50 })
  nombrePelicula: string;

  @Column("smallint", { name: "Año", nullable: true, default: () => "'0'" })
  aO: number | null;

  @Column("varchar", { name: "GeneroPelicula", nullable: true, length: 16 })
  generoPelicula: string | null;

  @Column("smallint", {
    name: "Duracion",
    nullable: true,
    default: () => "'0'",
  })
  duracion: number | null;

  @Column("varchar", { name: "Director", nullable: true, length: 30 })
  director: string | null;

  @OneToMany(() => Vistas, (vistas) => vistas.nombrePelicula2)
  vistas: Vistas[];
}
