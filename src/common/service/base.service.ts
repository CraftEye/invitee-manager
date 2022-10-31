import { DeepPartial, FindManyOptions, FindOneOptions, FindOptionsWhere, ObjectLiteral, Repository } from "typeorm";

export class BaseService<E>{

  entityRepo: Repository<E>
  constructor(repo) {
    this.entityRepo = repo;
  }

  async findOne(input:FindOneOptions<E>) {
    return await this.entityRepo.findOne(input)
  }

  async findOneOrFail(input:FindOneOptions<E>) {
    return await this.entityRepo.findOneOrFail(input)
  }

  async save(input:DeepPartial<E>[]) {
    return await this.entityRepo.save(input);
  }

  async delete(id: string | FindOptionsWhere<E>) {
    return await this.entityRepo.delete(id);
  }

  async find(input: FindManyOptions<E>) {
    return await this.entityRepo.find(input);
  }

  async findOrFail(input: FindManyOptions<E>) {
    return await this.entityRepo.findOneOrFail(input);
  }
}