import { Person } from "../entity/person.entity";

export interface CreatePersonDto extends Partial<Person>{}