import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector:'app-form',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  invaliduser: Boolean;
  constructor(private authService: AuthService, private router: Router){}
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
     this.authService.authenticateUser(data.value)
     .subscribe((result)=>{
       console.log('thisis result'+result);
       if(result){
         this.router.navigate(['/admin']);
       }else{
         this.invaliduser = true;
       }
     }, (error) => {
       if(error.status == 400){
          this.invaliduser = true;
       }
     })
   }
}