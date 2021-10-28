import { Controller, Get, Param, Req } from '@nestjs/common';
import { WeatherImageService } from '../../services/weather-image/weather-image.service';

@Controller('weather-image')
export class WeatherImageController {

  constructor(private weatherImageService: WeatherImageService) {
  }


  @Get(':city')
  async getWeatherImage(@Req() request: Request, @Param() city: {city: string}) {
    return this.weatherImageService.getUnsplashWeatherImage(city.city);
  }
}
