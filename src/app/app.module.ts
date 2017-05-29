import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './themes/sidebar/sidebar.component';
import { UserService } from './user.service';
import { WsseService } from './wsse.service';
import { MenuComponent} from './themes/menu/menu.component';
import { SideMenuButtonComponent } from './themes/side-menu-button/side-menu-button.component';
import { NavigationComponent } from './themes/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MenuComponent,
    SideMenuButtonComponent,
    NavigationComponent
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
