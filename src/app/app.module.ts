import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './themes/sidebar/sidebar.component';
import { UserService } from './user.service';
import { WsseService } from './wsse.service';
import { Tabs, Tab } from './tabs/tabs.component';
import { MenuComponent} from './themes/menu/menu.component';
import { SideMenuButtonComponent } from './themes/side-menu-button/side-menu-button.component';
import { NavigationComponent } from './themes/navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';
import {AUTH_PROVIDERS} from './services/auth-service' ;
import {LoggedInGuard} from './guards/loggedIn.guard' ;

const appRoutes: Routes = [
  { 
    path: 'users', component:UsersComponent,
    data: { title: 'All Users',
    canActivate: [LoggedInGuard],
  }
  },
  { path: 'users/:id', component: UserDetailComponent ,
    canActivate: [LoggedInGuard]},
  {
    path: 'recipients',
    component: UsersComponent,
    data: { title: 'Recipients', group:'recipient'},
    canActivate: [LoggedInGuard],
  },
    {
    path: 'volunteers',
    component: UsersComponent,
    data: { title: 'Volunteers', group:'volunteer'},
    canActivate: [LoggedInGuard],
  },
  { path: '',
    redirectTo: '/users',
    pathMatch: 'full',
    canActivate: [LoggedInGuard],
  },
  { path: '**', component: PageNotFoundComponent,
    canActivate: [LoggedInGuard],
  }
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService, 
    WsseService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
