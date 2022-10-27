import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { House } from "../../house/entity/house";

@Entity()
export class Person{

  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  houseName: string;

  @Column()
  phone: string;

  @Column()
  mainPlace: string;

  @Column()
  subPlace: string;

  @Column()
  notes: string;

  

  // @ManyToOne(() => House, (house) => house.members)
  // house: House;
}