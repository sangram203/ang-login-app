import { Component } from '@angular/core';

@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent{
  companyName:string = "abc company";
  annualsession:any =  "2018-2019"
}