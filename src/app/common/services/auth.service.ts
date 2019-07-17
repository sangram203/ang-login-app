import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  url="https://reqres.in/api/login"
  constructor(private http: HttpClient){}
  authenticateUser(credential){
    return this.http.post(this.url,credential).subscribe(
     (result)=>{
       console.log(result);
     }
    );
  }
}