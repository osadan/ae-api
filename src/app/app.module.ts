import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiCompComponent } from './api-comp/api-comp.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    ApiCompComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ApiCompComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    const el = createCustomElement(ApiCompComponent, {injector: this.injector});
    customElements.define('api-comp', el);
  }

  ngDoBootstrap(){
    
  }
}
