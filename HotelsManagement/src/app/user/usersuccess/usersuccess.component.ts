import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {
  hotelDetails: any;
  searchText:any;
  viewBooking:any=false;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.getHotelDetails()

  }
  getHotelDetails() {
    this.dataservice.getHotelDetailsApiCall().subscribe((data) => {
      this.hotelDetails = data
    })
  }
  
}
