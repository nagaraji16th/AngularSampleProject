import { HttpBackend, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable,Input } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
// import * as test from "../../test.json";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  errorData: {} | undefined;

  isLoggedIn = false;
  private http :HttpClient;



  constructor(httpBackend: HttpBackend) {
    this.http = new HttpClient(httpBackend);
    this.getJSON().subscribe(data => {
      console.log(data);
  });
}
  public getJSON(): Observable<any> {
    return this.http.get("./assets/employee.json");
}

  redirectUrl: string | undefined;
  //here we are posting data email and password from login form

  localStorageValue:any;

  login(username: string, password: string) {
 
          if (username) {
            localStorage.setItem("currentUser",username);
            this.localStorageValue = localStorage["currentUser"]
            this.isLoggedIn = true;
          }
          return username;
        catchError(this.handleError)
  }

  //get authorization token

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")  || '{}');
    return currentUser.token;
  }

  //this is fro logout the user
  logout() {
    localStorage.removeItem("currentUser");
    this.isLoggedIn = false;
  }

  //handle response errors

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    this.errorData = {
      errorTitle: "Oops! Request for document failed",
      errorDesc: "Something bad happened. Please try again later."
    };
    return throwError(this.errorData);
  }

  
}
