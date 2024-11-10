import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clients')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: null })
  name: string;

  @Column({ default: 0 })
  salary: number;

  @Column({ default: 0 })
  companyValue: number;

  @Column({ default: false })
  selected: boolean;
}
