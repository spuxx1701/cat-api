import { Injectable } from '@nestjs/common';

const cats = ['Hanni', 'Garfield', 'Moritz', 'Tigger'] as string[];

@Injectable()
export default class CatsService {
  findAll() {
    return cats;
  }

  findOne(id: string) {
    return cats.find((cat) => cat === id);
  }
}
