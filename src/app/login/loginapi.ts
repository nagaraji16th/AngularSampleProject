import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  //here we are posting data email and password from login form
  
  login(email: string, password: string){
    // return this.http.post<LoginResultModel>('/uniapply/api/auth-token/', {
      email: email
      password: password

    // })
  } 
}