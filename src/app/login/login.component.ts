import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector:'app-form',
  templateUrl:'./login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent{
  defaultUsername="sangram.hati@mphasis.com"
  form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[])
  });
}