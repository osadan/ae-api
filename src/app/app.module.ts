import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { ApiCompComponent } from './api-comp/api-comp.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    ApiCompComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ApiCompComponent
  ]
})
export class AppModule { 
  constructor(private injector: Injector){
    const el = createCustomElement(ApiCompComponent, {injector: this.injector});
    customElements.define('custom-api-comp', el);
  }

  ngDoBootstrap(){

  }
}
