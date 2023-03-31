import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { OwnerLandingComponent } from './owner-landing/owner-landing.component';
import { OwnerSignInComponent } from './owner-sign-in/owner-sign-in.component';
import { OwnerSignUpComponent } from './owner-sign-up/owner-sign-up.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { OwnersignupComponent } from './ownersignup222/ownersignup.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';




@NgModule({
  declarations: [
    OwnerComponent,
    OwnerLandingComponent,
    OwnerSignInComponent,
    OwnerSignUpComponent,
    HoteldetailsComponent,
    OwnersignupComponent,
    OwnersuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule
    
  ]
})
export class OwnerModule { }
