import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "", loadChildren:() => import("./home/home.module").then(m => m.HomeModule) },
      { path: "login", loadChildren:() => import("./auth/login/login.module").then(m => m.LoginModule) },
      { path: "sign-up", loadChildren:() => import("./auth/signup/signup.module").then(m => m.SignupModule) },
      { path: '**', component: PageNotFoundComponent }
   ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
