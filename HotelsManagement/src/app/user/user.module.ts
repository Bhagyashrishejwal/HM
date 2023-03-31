import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserSignInComponent } from './user-sign-in/user-sign-in.component';

import { UsersignupComponent } from './usersignup/usersignup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserComponent,
    UserLandingComponent,
    UserSignInComponent,
    
    UsersignupComponent,
         UsersuccessComponent,
         HotelbookingComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,MatRadioModule,
    FormsModule,
    SharedModule
    
  ]
})
export class UserModule { }
