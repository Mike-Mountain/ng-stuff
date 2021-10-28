import { HttpModule, Module } from '@nestjs/common';
import { WeatherImageController } from './controller/weather-image/weather-image.controller';
import { WeatherImageService } from './services/weather-image/weather-image.service';

@Module({
  imports: [HttpModule],
  controllers: [WeatherImageController],
  providers: [WeatherImageService],
})
export class WeatherImageModule {}
