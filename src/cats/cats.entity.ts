import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Cat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;
}
