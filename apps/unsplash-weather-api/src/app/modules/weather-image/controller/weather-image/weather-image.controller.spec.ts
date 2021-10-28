import { Test, TestingModule } from '@nestjs/testing';
import { WeatherImageController } from './weather-image.controller';

describe('WeatherImageController', () => {
  let controller: WeatherImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherImageController],
    }).compile();

    controller = module.get<WeatherImageController>(WeatherImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
