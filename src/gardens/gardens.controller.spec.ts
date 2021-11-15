import { Test, TestingModule } from '@nestjs/testing';
import { GardensController } from './gardens.controller';

describe('GardensController', () => {
  let controller: GardensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GardensController],
    }).compile();

    controller = module.get<GardensController>(GardensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
