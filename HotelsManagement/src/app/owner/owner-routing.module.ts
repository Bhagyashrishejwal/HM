import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerComponent } from './owner.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';

const routes: Routes = [{path:'',component: OwnerLandingComponent},
  { path: 'owner-landing', component: OwnerLandingComponent },
{path:'owner-sign-up',component:OwnerSignUpComponent},
{path:'hoteldetails',component:HoteldetailsComponent},
{path:'owner-sign-in',component:OwnerSignInComponent},
{path:'ownersuccess',component:OwnersuccessComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
