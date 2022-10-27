import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../../person/entity/person.entity";
import { EventPersonStatus } from "../constants/event.constant";
import { Event } from "./event.entity";

@Entity()
export class EventPerson{
  @Column()
  eventId!: string;

  @Column()
  personId!: string;

  @Column({default: EventPersonStatus.Enlisted})
  status!: EventPersonStatus;

  @ManyToOne(() => Event, (event) => event.eventPerson)
  event!: Event;

  @ManyToOne(() => Person, (person) => person.eventPerson)
  person!: Person;
}