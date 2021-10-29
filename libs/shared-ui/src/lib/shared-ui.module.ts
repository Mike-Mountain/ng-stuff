import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [CoreModule, MaterialModule, PipesModule],
  exports: [CoreModule, MaterialModule, PipesModule],
})
export class SharedUiModule {}
