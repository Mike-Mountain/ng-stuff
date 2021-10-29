import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsplashGalleryComponent } from './components/unsplash-gallery/unsplash-gallery.component';

const routes: Routes = [
  { path: '', component: UnsplashGalleryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsplashRoutingModule {
}
