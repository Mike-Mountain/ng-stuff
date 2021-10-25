import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '@ng-stuff/shared-ui';
import { LandingComponent } from './components/landing/landing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LayoutComponent, LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
}
