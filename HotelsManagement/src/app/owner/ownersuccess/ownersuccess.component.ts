import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  apidata: any;
  flag = false;
  ownerName:any
  HotelListByOwnerdata: any;
  ownerHotelData:any=[];
  hotelListByOwner: any;
  refreshedHotelList : any =[]
  showHotelDetails: any = false;
  constructor(private dataservice: DataService, private router: Router,private httpclient:HttpClient) { }

  ngOnInit(): void {
   this.ownerName = this.dataservice.ownerName;
   this.hotelListByOwner = this.dataservice.hotelListByOwner;
   console.log(this.hotelListByOwner);
   
  }
  //deleteApi
  async deleteData(id: any) {
     await this.dataservice.deletHotelById(id).toPromise()

    //to refresh hotel list
    this.refreshHotelDetails(id)
  }

  refreshHotelDetails(id:any) {
    this.hotelListByOwner.forEach((ele:any)=>{
     if(ele.id != id){
      this.refreshedHotelList.push(ele)
     }
    })
    this.hotelListByOwner = [...this.refreshedHotelList];
    this.refreshedHotelList = [];
  }


  async editData(id: any) {
    this.dataservice.hotelDetailId = id
    this.dataservice.hotelJourney = 'Edit';
    this.dataservice.HotelByIdApiData = await this.dataservice.getHotelDetailById(id).toPromise()

    this.router.navigateByUrl('/Owner/hoteldetails')

  } 
  newRegistration()
  {
      
    this.dataservice.hotelJourney = 'New Registration';
    this.router.navigateByUrl('/Owner/hoteldetails');
  }
  viewHotelList(){
    this.showHotelDetails = true;
  }

  
}


