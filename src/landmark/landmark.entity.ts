import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Landmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  direccion: string;

  @Column()
  barrio: string;
}