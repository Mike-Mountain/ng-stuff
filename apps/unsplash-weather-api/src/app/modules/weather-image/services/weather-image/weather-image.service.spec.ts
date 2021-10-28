import { Test, TestingModule } from '@nestjs/testing';
import { WeatherImageService } from './weather-image.service';

describe('WeatherImageService', () => {
  let service: WeatherImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WeatherImageService],
    }).compile();

    service = module.get<WeatherImageService>(WeatherImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
