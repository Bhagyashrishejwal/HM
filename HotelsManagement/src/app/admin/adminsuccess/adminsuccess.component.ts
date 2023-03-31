import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {
  hoteldetails: any;


  constructor(private router : Router, private dataservice : DataService,private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.getHotelDetails();
   }
 
   getHotelDetails() {
     this.dataservice.getHotelDetailsApiCall().subscribe((data) => {
       this.hoteldetails = data
       console.log(data);
     })
   }
   newChange():void{
     this.router.navigateByUrl('adminsignin')
   }
  //deletApi
  async deleteData(id: any) {
   await this.dataservice.deletHotelById(id).toPromise()
   //to refresh hotel list
   this.getHotelDetails();
 }
 
 }

 // ngOnInit(): void {
 //  this.getHotelDetails();
  

 // getHotelDetails() {
   // this.dataservice.getHotelDetailsApiCall().subscribe((data) => {
    //  this.HotelDetails = data
    //  console.log(data);
    //})
 // }
  //newChange():void{
   // this.router.navigateByUrl('adminsignin')
  //}
 //deletApi
 //async deleteData(id: any) {
//  await this.dataservice.deletHotelById(id).toPromise()
  //to refresh hotel list
 // this.getHotelDetails();
//}

//}

//}
//async deleteData(id: any) {
 // await this.dataservice.deletHotelById(id).toPromise()
  //to refresh hotel list
 // this.getHotelDetails();
//}

