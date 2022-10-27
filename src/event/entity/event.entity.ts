import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EventPerson } from "./event.person.entity";

@Entity()
export class Event{
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @OneToMany(() => EventPerson, (eventPerson) => eventPerson.event)
  eventPerson?: EventPerson;
}