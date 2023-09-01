import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  Loading=false;
  constructor(public authService:AuthService){}

  onSignup(form:NgForm){
     console.log(form.value)
  
     
    if(!form.valid)
    return;
  //this.Loading=true;
    this.authService.createUser(form.value.email,form.value.password);





  }


}