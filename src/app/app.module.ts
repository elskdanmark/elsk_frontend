import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { WsseService } from './wsse.service';
import { Tabs, Tab } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, WsseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
