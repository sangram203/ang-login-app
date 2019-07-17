import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector:'app-form',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  constructor(private authService: AuthService){}
  defaultUsername="sangram.hati@mphasis.com"
  form = new FormGroup({
    email: new FormControl('',[
      Validators.required
      ]),
    password: new FormControl('',[Validators.required])
  });
   get email(){
     return this.form.get('email');
   }
    get password(){
     return this.form.get('password');
   }
   login(data){
     console.log(data.value);
     this.authService.authenticateUser(data.value);
   }
}