import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent {
public loginForm!:FormGroup;
  adminData: any;
constructor(private http:HttpClient,private fb:FormBuilder,private router:Router,
  private dataService:DataService){

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
  this.adminData= await this.dataService.getAdminCall().toPromise();
  var admin = this.adminData.find((ele:any)=>{
    return ele.email===this.loginForm.value.Email && ele.password===this.loginForm.value.Password;
  })
  
 
 if(admin){
  alert("Login successfull!")
  this.router.navigateByUrl('/Admin/adminsuccess')
}
else{
alert("User not found")

this.router.navigateByUrl('/Admin/admin-signin')
 } 
}

}

