import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EventPerson } from '../../event/entity/event.person.entity';
import { House } from '../../house/entity/house.entity';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  mainPlace?: string;

  @Column({ nullable: true })
  subPlace?: string;

  @Column({ nullable: true })
  notes?: string;

  // @ManyToOne(() => House, (house) => house.members)
  // house: House;

  @OneToMany(() => EventPerson, (eventPerson) => eventPerson.person)
  eventPerson?: EventPerson;
}
