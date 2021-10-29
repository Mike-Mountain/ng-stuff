import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsplashRoutingModule } from './unsplash-routing.module';
import { UnsplashGalleryComponent } from './components/unsplash-gallery/unsplash-gallery.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MatCardModule } from '@angular/material/card';
import { PipesModule } from '@ng-stuff/shared-ui';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [UnsplashGalleryComponent, WeatherComponent],
  imports: [
    CommonModule,
    UnsplashRoutingModule,
    MatCardModule,
    PipesModule,
    MatDialogModule,
    MatPaginatorModule,
  ],
})
export class UnsplashModule {}
