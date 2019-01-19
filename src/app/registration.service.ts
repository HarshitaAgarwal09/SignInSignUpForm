import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './userdetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }
  
  adduser(user:User):Observable<User>{
    console.log(user);
    return this.http.post<User>("http://localhost:3000/users/", user);
  }
  getusers():Observable<User[]>{
  	return this.http.get<User[]>("http://localhost:3000/users/");
  }
}