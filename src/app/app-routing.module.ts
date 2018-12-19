import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {AuthproviderComponent} from "./authprovider/authprovider.component";
import {EmailauthComponent} from "./emailauth/emailauth.component";
import {PrivateComponent} from "./private/private.component";
import {PasswordlessComponent} from "./passwordless/passwordless.component";

//import the Angular Guard
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    {path:"", component: EmailauthComponent },
    {path:"signin", component: SigninComponent },
    {path:"provider", component: AuthproviderComponent },
    {path:"passwordless", component: PasswordlessComponent },
    {path:"private", 
    canActivate: [AuthGuard]
    ,component: PrivateComponent },
    
]


@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
