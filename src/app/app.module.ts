import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/themes/sidebar/sidebar.component';
import { injectables } from './services/injectables';
import { UserService } from './services/user.service';
import { WsseService } from './services/wsse.service';
import { ApiService } from './services/api.service';
import { Tabs, Tab } from './components/tabs/tabs.component';
import { MenuComponent} from './components/themes/menu/menu.component';
import { SideMenuButtonComponent } from './components/themes/side-menu-button/side-menu-button.component';
import { NavigationComponent } from './components/themes/navigation/navigation.component';
import { UsersComponent} from './components/users/users.component';
import { UserDetailComponent } from './components/users/user-detail.component';
import { UsersListComponent } from './components/users/users-list.components';
import { PageNotFoundComponent } from './components/page-not-found.component';

const appRoutes: Routes = [
  { 
    path: 'users', component:UsersComponent,
     data: { title: 'All Users'}
  },
  { path: 'users/:id',      component: UserDetailComponent },
  {
    path: 'recipients',
    component: UsersComponent,
    data: { title: 'Recipients', group:'recipient'}
  },
    {
    path: 'volunteers',
    component: UsersComponent,
    data: { title: 'Volunteers', group:'volunteer'}
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab,
    SidebarComponent,
    MenuComponent,
    SideMenuButtonComponent,
    NavigationComponent,
    UsersComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, WsseService, ApiService, injectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
