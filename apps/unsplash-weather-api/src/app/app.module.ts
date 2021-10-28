import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherImageModule } from './modules/weather-image/weather-image.module';

@Module({
  imports: [WeatherImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
