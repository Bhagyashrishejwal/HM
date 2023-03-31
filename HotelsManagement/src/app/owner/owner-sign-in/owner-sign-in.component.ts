import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-owner-sign-in',
  templateUrl: './owner-sign-in.component.html',
  styleUrls: ['./owner-sign-in.component.scss']
})
export class OwnerSignInComponent {
  loginForm!:FormGroup;
  adminData:any
  ownerData: any;
  hotelDetails: any;
  hotelListByOwner:any= [];
  validOwner: any;
  ownerSuccData: any;
  constructor(private fb:FormBuilder,private dataService:DataService,private httpClient:HttpClient,
    private router:Router){

  }
  ngOnInit(){
  this.loginValidation();
  this.OwnerGetApiCall();
 this. HotelDetailsGetApiCall();
}
loginValidation(){
  this.loginForm=this.fb.group({
    Email:['',[Validators.required,Validators.maxLength(40),Validators.pattern("^[a-zA-Z]+$")]],
    Password:['',[Validators.required,Validators.maxLength(8)]],
  });
}
//async login(){
 // console.log('signinForm Data',this.loginForm.value);
 // this.adminData= await this.dataService.getOwnerCall().toPromise();
 // var admin = this.adminData.find((ele:any)=>{
  //  return ele.email===this.loginForm.value.Email && ele.password===this.loginForm.value.Password;
 // })
  
 
// if(admin){
 // alert("Login successfull!")
 // this.router.navigateByUrl('/Owner/ownersuccess')
//}
//else{
//alert("User not found")

//this.router.navigateByUrl('/Owner/owner-sign-in')
// } 
//}



OwnerGetApiCall() {
  this.dataService.getOwnerCall().subscribe(respo => {
    this.ownerData = respo;
    console.log(respo);
  });
  console.log('this.ownerData', this.ownerData);
}

HotelDetailsGetApiCall() {
  this.dataService.getHotelDetailsApiCall().subscribe(respo => {
    this.hotelDetails = respo;
    console.log(respo);
  })
}
login() {
  if (this.hotelDetails) {
    this.hotelDetails.forEach((element: any) => {
      if (this.loginForm.value.userName == element.userName) {
        this.hotelListByOwner.push(element);
      }
    })
    this.dataService.hotelListByOwner = this.hotelListByOwner;
    console.log('this.dataservice.hotelListByOwner', this.dataService.hotelListByOwner);
  }

  if (this.ownerData) {
    this.validOwner = this.ownerData.find((dbData: any) => {
      return dbData.userName === this.loginForm.value.userName && dbData.userPass === this.loginForm.value.userPass
    })
    console.log('this.ownerSuccData ', this.ownerSuccData);
  }
  this.redirection()
}

redirection() {
  if (this.validOwner) {
    alert("Login successful");
    this.dataService.ownerName = this.loginForm.value.userName;
    this.loginForm.reset();
    this.router.navigateByUrl('/Owner/ownersuccess')
  }
  else {
    alert("user not found")
    this.loginForm.reset();
    this.router.navigateByUrl('/Owner/owner-landing')
  }
}

}











