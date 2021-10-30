import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { map, mergeMap, tap } from 'rxjs/operators';
import { UnsplashImage, UnsplashWeatherImage, Weather } from '@ng-stuff/data';

@Injectable()
export class WeatherImageService {
  unsplashSearchQuery: string;
  totalImages: number;

  constructor(private http: HttpService) {}

  getCurrentWeatherForCity(city: string): Observable<Weather> {
    const url = `${environment.weatherApi}?q=${city}&appId=${environment.weatherKey}`;
    return this.http.get(url).pipe(map((item) => item.data));
  }

  getImageByWeather(weather: Weather, page: number): Observable<UnsplashImage> {
    const tempWeather = new Weather(weather);
    this.unsplashSearchQuery = `${tempWeather.description} + nature`;
    const url = `${environment.unsplashApi}/search/photos?query='${this.unsplashSearchQuery}'&page=${page}&per_page=10&orientation=landscape&order_by=relevant`;
    const reqHeaders = {
      Authorization: `Client-ID ${environment.unsplashKey}`,
    };
    return this.http
      .get(url, { headers: reqHeaders })
      .pipe(tap(image => this.totalImages = image.data.total), map((image) => image.data.results));
  }

  getUnsplashWeatherImage(city: string, page = '1'): Observable<UnsplashWeatherImage> {
    return this.getCurrentWeatherForCity(city).pipe(
      mergeMap((weather) => {
        return this.getImageByWeather(weather, parseInt(page, 10)).pipe(
          map((images) => {
            return { images, weather };
          })
        );
      }),
      map((unsplashWeatherImage) => {
        return new UnsplashWeatherImage(
          unsplashWeatherImage,
          this.unsplashSearchQuery,
          this.totalImages
        );
      })
    );
  }
}
