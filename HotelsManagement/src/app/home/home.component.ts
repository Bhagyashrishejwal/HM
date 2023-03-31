import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router:Router){
  }
  Journey(Journey:string){
    if(Journey=='Admin'){
      this.router.navigateByUrl('/Admin/admin-landing')
    }
    else if(Journey=='Owner'){
      this.router.navigateByUrl('/Owner/owner-landing')
    }
    else {
      this.router.navigateByUrl('/User/user-landing');
   }
  }}



