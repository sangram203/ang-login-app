import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
  url="#"
  constructor(private http: HttpClient){}
  authenticateUser(credential){
    return this.http.post(this.url,credential).
    subscribe(
     (result)=>{
       console.log(result);
     }
    );
  }
}