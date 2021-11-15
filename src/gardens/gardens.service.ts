import { Injectable } from '@nestjs/common';
import { Garden } from './interfaces/garden.interface';

@Injectable()
export class GardensService {
  private readonly gardens: Garden[] = [];

  create(garden: Garden) {
    this.gardens.push(garden);
  }

  findAll(): Garden[] {
    return this.gardens;
  }
}
