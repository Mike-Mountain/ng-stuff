import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class WeatherImageService {
  constructor(private http: HttpService) {
  }

  getCurrentWeatherForCity(city: string): Observable<any> {
    const url = `${environment.weatherApi}?q=${city}&appId=${environment.weatherKey}`;
    return this.http.get(url).pipe(map(item => item.data));
  }

  getImageByWeather(weather: string): Observable<any> {
    const url = `${environment.unsplashApi}/search/photos?query='nature + ${weather}'`;
    const reqHeaders = {
      Authorization: `Client-ID ${environment.unsplashKey}`
    };
    return this.http.get(url, { headers: reqHeaders }).pipe(map(item => item.data));
  }

  async getUnsplashWeatherImage(city: string) {
    return this.getCurrentWeatherForCity(city).pipe(
      mergeMap(data => this.getImageByWeather(data.weather.main)),
      map(data => data.results.map(results => results.urls.regular))
    );
  }

}
