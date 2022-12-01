import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Cat from './cats.entity';

@Injectable()
export default class CatsService {
  constructor(
    @InjectRepository(Cat)
    private repository: Repository<Cat>,
  ) {}

  async findAll(): Promise<Cat[]> {
    const cats = await this.repository.find();
    return cats;
  }

  async findOne(id: string): Promise<Cat> {
    const cat = await this.repository.findOne({ where: { id } });
    if (!cat) throw new NotFoundException();
    return cat;
  }

  async create(cat: Partial<Cat>): Promise<Cat> {
    const createdCat: Cat = await this.repository.save(cat);
    return createdCat;
  }
}
