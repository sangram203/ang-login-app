import { Component } from '@angular/core';
import { AuthService } from '../../common/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  constructor(private authService: AuthService){}
  //checklogin = this.authService.isLoggedin();
}