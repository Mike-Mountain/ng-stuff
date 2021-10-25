import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [CoreModule, MaterialModule],
  exports: [CoreModule, MaterialModule]
})
export class SharedUiModule {}
