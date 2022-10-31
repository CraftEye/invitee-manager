import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { CreatePersonDto } from '../dto/person.dto';
import { Person } from '../entity/person.entity';
import { PersonService } from '../service/person.service';

@Controller('person')
export class PersonController {
  constructor(
    private readonly personService: PersonService,
  ) { }
  
  @Post()
  async create(@Body()input: CreatePersonDto) {
    return await this.personService.save(input)
  }
}
