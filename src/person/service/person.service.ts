import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../entity/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    personRepo: Repository<Person>
  ) {
    
  }
}
