import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

import { UserComponent } from './user.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';

const routes: Routes = [{ path: '', component: UserLandingComponent },
{path:'user-landing',component:UserLandingComponent},
{path:'usersignup',component:UsersignupComponent},
{path:'user-sign-in',component:UserSignInComponent},
{path:'usersuccess',component:UsersuccessComponent},
{path:'hotelbooking',component:HotelbookingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
