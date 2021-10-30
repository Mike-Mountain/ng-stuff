import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { WeatherImageService } from '../../services/weather-image/weather-image.service';

@Controller('weather-image')
export class WeatherImageController {

  constructor(private weatherImageService: WeatherImageService) {
  }


  @Get()
  async getWeatherImage(@Req() request: Request, @Query() params: {city: string, page: string}) {
    return this.weatherImageService.getUnsplashWeatherImage(params.city, params.page);
  }
}
