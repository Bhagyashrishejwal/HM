import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner-landing',
  templateUrl: './owner-landing.component.html',
  styleUrls: ['./owner-landing.component.scss']
})
export class OwnerLandingComponent {
  constructor(private dataservice:DataService,private router : Router) { }
  newRegistration()
  {
        this.dataservice.newRegistration = 'New Registration';
    this.router.navigateByUrl('/Owner/hoteldetails');

  }

}
