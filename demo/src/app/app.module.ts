import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxCodejarModule} from '../../../ngx-codejar/src/lib/ngx-codejar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCodejarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
