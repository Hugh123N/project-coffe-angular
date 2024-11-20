import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url=environment.apiUrl;


  constructor(private http:HttpClient) { }

  signup(data:any){
    return this.http.post(this.url+'/user/signup',data,{
      headers:new HttpHeaders().set('content-type','application/json') //indica que es json
    })
  }
}
