import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
@Injectable()
export class AuthService{
  url="https://reqres.in/api/login"
  constructor(private http: HttpClient){}
  authenticateUser(credential){
    return this.http.post(this.url,credential)
    .map((res: any)=>{
      let result = res;
      if(result && result.token){
        localStorage.setItem('token', result.token);
        return true;
      }else{
        return false;
      }
    })
  }
}