import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  
adminurl= ' http://localhost:3000/Admin';
ownerurl= ' http://localhost:3000/Owner';
userurl=' http://localhost:3000/User';
hoteldetailsurl= 'http://localhost:3000/hoteldetails'
hotelbookingurl=' http://localhost:3000/hotelbooking'
postData:any=[];
postDataObj:any;
hoteldetailId: any;
newRegistration: any ;
HotelByIdApiData: any;
editId: any;
dataId: any;
ownerName: any;
hotelListByOwner: any;
hotelDetailId: any;
hotelJourney!: string;


 


//getApiData:any;

  constructor(public httpClient:HttpClient){

  }
  getAdminCall(){
   return this.httpClient.get(this.adminurl)
  }
  getOwnerCall(){
    return this.httpClient.get(this.ownerurl)
  }
  getUserApiCall(){
    return this.httpClient.get(this.userurl)
  }
  postAdminCall(data:any){
return this.httpClient.post(this.adminurl,data);
  }
  postOwnerCall(data:any){
    return this.httpClient.post(this.ownerurl,data);
  }
  postUserApiCall(data:any){
    return this.httpClient.post(this.userurl,data)
  }
  postHotelDetailsApiCall(data:any){
    return this.httpClient.post(this.hoteldetailsurl,data)
  }
  postHotelBookingApiCall(data: any) {
    return this.httpClient.post(this.hotelbookingurl,data)
  }




 patchHotelDetailsApiCall(hoteldetails: any){
  return this.httpClient.patch(this.hoteldetailsurl+ "/" + this.hoteldetailId , hoteldetails )
 }
 getHotelDetailById(id:number){
  return this.httpClient.get(this.hoteldetailsurl +'/' +id)
 }
 getHotelDetailsApiCall(){
  return this.httpClient.get(this.hoteldetailsurl)
}
//deletOwnerCall
deletHotelById(id:any){
  return this.httpClient.delete(this.hoteldetailsurl + "/" + id)
}


 
}
