import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
 
 
  
public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,private dataService:DataService,
    private router:Router){

  }
  ngOnInit(){
   this.formValidation()
  }
formValidation(){
this.signupForm=this.formBuilder.group({
 firstname:['',[Validators.required,Validators.maxLength(40)]],
 lastname:['',[Validators.required,Validators.maxLength(40)]],
 mobile:['',[Validators.required,Validators.maxLength(12)]],
 password:['',[Validators.required,Validators.maxLength(8)]],
 email:['',[Validators.required,Validators.email]],
 gender:['',[Validators.required]],
 userCheck:['',[Validators.requiredTrue]]


})
}
postUserdata(data:any){
  console.log(data);
  //post api
  this.dataService.postUserApiCall(data).subscribe((res)=>{
console.log(res);

  })
  
  
}}





