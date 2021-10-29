import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'images', loadChildren: () => import('./unsplash/unsplash.module').then(m => m.UnsplashModule)},
  {path: '', pathMatch: 'full', redirectTo: 'images'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
