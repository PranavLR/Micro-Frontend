import { ApplicationRef, DoBootstrap, Injector, NgModule, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
})
export class MicroNG1 implements DoBootstrap{ 
    injector = inject(Injector);

    ngDoBootstrap(appRef: ApplicationRef) {
      appRef.bootstrap(AppComponent, 'app-micro-ng')
      // const element = createCustomElement(AppComponent, {
      //   injector: this.injector,
      // })
      // customElements.define('app-micro-ng', element)
    }
}
