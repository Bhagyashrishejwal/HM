import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.scss']
})
export class OwnerSignUpComponent {
  public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,private dataService:DataService){

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
postOwnerdata(data:any){
  console.log(data);
  //post api
  this.dataService.postOwnerCall(data).subscribe((res)=>{
console.log(res);

  })
  
  
}



}


