import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UnsplashStore } from './unsplash.store';
import { UnsplashWeatherImage } from '@ng-stuff/data';

@Injectable({ providedIn: 'root' })
export class UnsplashQuery extends QueryEntity<UnsplashWeatherImage> {
  constructor(protected store: UnsplashStore) {
    super(store);
  }
}
