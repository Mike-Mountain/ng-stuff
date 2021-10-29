import { NgModule } from '@angular/core';
import { RandomNumberPipe } from './random-number/random-number.pipe';

@NgModule({
  declarations: [RandomNumberPipe],
  exports: [RandomNumberPipe],
})
export class PipesModule {}
