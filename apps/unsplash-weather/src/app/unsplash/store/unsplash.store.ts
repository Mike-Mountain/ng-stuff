import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { UnsplashWeatherImage } from '@ng-stuff/data';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weather-image' })
export class UnsplashStore extends EntityStore<UnsplashWeatherImage> {
  constructor() {
    super();
  }
}
