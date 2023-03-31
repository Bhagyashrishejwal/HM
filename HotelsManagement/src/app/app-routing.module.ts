import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from './admin/admin-landing/admin-landing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'',redirectTo:'/home',pathMatch:'full'},
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'Owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) }, { path: 'User', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
