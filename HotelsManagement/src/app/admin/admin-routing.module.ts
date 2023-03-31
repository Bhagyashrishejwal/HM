import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminComponent } from './admin.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
{path:'admin-landing',component:AdminLandingComponent},
{path:'',redirectTo:'admin-landing',pathMatch:'full'},

{path:'admin-signin',component:AdminSigninComponent},
{path:'sign-up',component:SignUpComponent},
{path:'adminsuccess',component:AdminsuccessComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
