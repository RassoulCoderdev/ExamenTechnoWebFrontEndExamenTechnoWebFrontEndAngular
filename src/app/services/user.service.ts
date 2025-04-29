import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl ='http://localhost:8082/users/api/v1/user';

  constructor(private http: HttpClient) { }

  //route pour recupérer tous les utilisateurs
  getUsers(): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  //verifier un mail
  checkEmail(token: string): Observable<any> {
    return this.http.get(`${this.apiUrl}//verifyEmail/${token}`);
  } 


  //Resister de user
  registerUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
}
