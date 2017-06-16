import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './themes/sidebar/sidebar.component';
import { UserService } from './user.service';
import { WsseService } from './wsse.service';
import { MenuComponent} from './themes/menu/menu.component';
import { SideMenuButtonComponent } from './themes/side-menu-button/side-menu-button.component';
import { NavigationComponent } from './themes/navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

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
    SidebarComponent,
    MenuComponent,
    SideMenuButtonComponent,
    NavigationComponent,
    UsersComponent,
    UserDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, WsseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
