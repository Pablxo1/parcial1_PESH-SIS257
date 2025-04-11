import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('varchar', { name: 'ci', length: 50 })
  ci: string;

  @Column('varchar', { name: 'nombres', length: 50 })
  nombres: string;

  @Column('varchar', { name: 'primer_apellido', length: 30 })
  primerApellido: string;

  @Column('varchar', { name: 'segundo_apellido', length: 30 })
  segundoApellido: string;

  @Column('date', { name: 'fecha_nacimiento' })
  fechaNacimiento: Date;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;
}
