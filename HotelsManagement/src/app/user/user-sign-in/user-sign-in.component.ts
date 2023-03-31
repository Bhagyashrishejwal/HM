import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.scss']
})
export class UserSignInComponent {
  loginForm!:FormGroup;
  UserData:any
  constructor(private fb:FormBuilder,private dataService:DataService,private httpClient:HttpClient,
    private router:Router){

  }
  ngOnInit(){
  this.loginValidation();
}
loginValidation(){
  this.loginForm=this.fb.group({
    Email:['',[Validators.required,Validators.maxLength(40),Validators.pattern("^[a-zA-Z]+$")]],
    Password:['',[Validators.required,Validators.maxLength(8)]],
  });
}
async login(){
  console.log('signinForm Data',this.loginForm.value);
  this.UserData= await this.dataService.getUserApiCall().toPromise();
  var user = this.UserData.find((ele:any)=>{
    return ele.email===this.loginForm.value.Email && ele.password===this.loginForm.value.Password;
  })
  
 
 if(user){
  alert("Login successfull!")
  this.router.navigateByUrl('/User/usersuccess')
}
else{
alert("User not found")

this.router.navigateByUrl('/User/user-sign-in')
 } 
}







}




