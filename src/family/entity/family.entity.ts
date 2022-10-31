import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Family{
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  
}