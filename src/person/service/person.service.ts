import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../common/service/base.service';
import { Person } from '../entity/person.entity';

@Injectable()
export class PersonService extends BaseService<Person> {
  constructor(
    @InjectRepository(Person)
    personRepo: Repository<Person>
  ) {
    super(personRepo);
  }
}
