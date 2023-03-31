import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminLandingComponent,
    AdminSigninComponent,
    SignUpComponent,
    AdminsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ]
})
export class AdminModule { }
