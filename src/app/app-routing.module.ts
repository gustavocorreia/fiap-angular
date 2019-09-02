import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListPage } from './pages/UserList/UserList.page';
import { UserPage } from './pages/User/User.page';
import { LoginPage } from './pages/Login/Login.page';

import { Error404Component } from './pages/error404/error404.component'

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'userlist', component: UserListPage },
  { path: 'user', component: UserPage },
  { path: 'user/:id', component: UserPage },
  { path: '', redirectTo: '/userlist', pathMatch: 'full' },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
