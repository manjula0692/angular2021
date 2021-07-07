import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ButtonComponent} from './button.component';
import { UserRowComponent } from './components/user-row/user-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UserRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
