import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HomepageComponent } from './homepage/homepage.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "logout",
    component: LogoutComponent
  },
  {
    path: "",
    redirectTo: "./homepage",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
