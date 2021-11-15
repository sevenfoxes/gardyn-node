import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateGardenDto } from './dto/create-garden.dto';
import { GardensService } from './gardens.service';
import { Garden } from './interfaces/garden.interface';

@Controller('gardens')
export class GardensController {
  constructor(private gardensService: GardensService) {}

  @Post()
  async create(@Body() createGardenDto: CreateGardenDto) {
    this.gardensService.create(createGardenDto);
    return 'New Garden created';
  }

  @Get()
  async findAll(): Promise<Garden[]> {
    return this.gardensService.findAll();
  }
}
