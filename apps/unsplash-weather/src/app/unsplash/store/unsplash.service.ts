import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { UnsplashStore } from './unsplash.store';
import { UnsplashWeatherImage } from '@ng-stuff/data';

@Injectable({ providedIn: 'root' })
export class UnsplashService extends NgEntityService<UnsplashWeatherImage> {
  constructor(protected store: UnsplashStore) {
    super(store);
  }
}
