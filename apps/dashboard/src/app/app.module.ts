import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@ng-stuff/shared-ui';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, LayoutModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
