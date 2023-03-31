import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.scss']
})
export class HoteldetailsComponent {
  registrationForm!:FormGroup;
  newRegistration:any;
  regitrationForm!: FormGroup;
 // dataId: any;
  editData: any;
  editIdArray:any=[];
  
  hotelJourney!: string;

  constructor(private fb: FormBuilder, private dataservice: DataService,private router:Router,
    private httpClient:HttpClient) { }

  ngOnInit() {
    console.log('hotel details');

    this.hotelJourney = this.dataservice.newRegistration;
    console.log('data...',this.hotelJourney);
    // if(this.newRegistration){
    //   this.editData = {} ;
    // }
    // else{
    //   this.editData = this.dataservice.HotelByIdApiData;
    // }
    if (this.hotelJourney == 'New Registration') {
      this.editData = {};
    } else {
      this.editData = this.dataservice.HotelByIdApiData;
    } 

    
   // this.dataId = this.dataservice.dataId;
   // this.newRegistration = this.dataservice.newRegistration;
    //this.editData = this.dataservice.getApiData;
   // console.log('data...', this.editData);
   // if(this.){
     // this.editData = {} ;
   // }
    //else{
     // this.editData = this.dataservice.getApiData;
    //}
    this.formData()

 }

  formData() {
    this.registrationForm = this.fb.group({
     
      userName: [ this.editData ? this.editData.userName :'', [Validators.required, Validators.maxLength(40)]],
      hotelName: [ this.editData ? this.editData.hotelName :'', [Validators.required,]],
     hotelAddress: [this.editData ? this.editData.hotelAddress : '', [Validators.required,]],
      hotelMobile: [this.editData ? this.editData.hotelMobile : '', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]{10}')]],
      hotelMenu: [ this.editData ? this.editData.hotelMenu : '', [Validators.required]],
     roomAvailable: [this.editData ? this.editData.roomAvailable : '',[Validators.required]],
      owenrCheck: [this.editData ? this.editData.owenrCheck :  '', [Validators.requiredTrue]],
      userPass: [this.editData ? this.editData.userPass : '', [Validators.required, Validators.maxLength(8)]],
   });
   
}
submit() {
  //post api call
 if (this.hotelJourney == 'New Registration') {
   this.dataservice. postHotelDetailsApiCall(this.registrationForm.value).subscribe((res) => {
     console.log(res);
   })
 }
 else {
   //patch pi call
   this.dataservice.patchHotelDetailsApiCall(this.registrationForm.value).subscribe((res: any) => {
     console.log(res);
   })
 }
 this.router.navigateByUrl('/Owner/owner-landing')
}




}
