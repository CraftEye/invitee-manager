import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../../person/entity/person.entity";

@Entity()
export class House {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  // @OneToMany(()=>Person,(person)=>person.house)
  // members?: Person[];
}
