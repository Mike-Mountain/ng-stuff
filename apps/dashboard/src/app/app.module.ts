import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from '@ng-stuff/shared-ui';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { environment } from '@ng-stuff/config';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, LayoutModule, AppRoutingModule],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: environment.apiUrl } }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
