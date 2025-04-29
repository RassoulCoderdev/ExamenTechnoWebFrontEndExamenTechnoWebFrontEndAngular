import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  token!: string;
  public regitredUser: User = new User();

  private helper = new JwtHelperService();
  private baseUrl = 'http://localhost:8082/users';

    login(data: any) {
        //console.log(data);
        return this.http.post(`${this.baseUrl}/login`, data, {
          observe: 'response',
        });
    }


    constructor(private http: HttpClient,private router: Router,) { this.loadToken(); }

    // Créer un utilisateur
    createUser(userData: any): Observable<any> {
      console.log(userData);
      return this.http.post(`${this.baseUrl}/api/v1/user`, userData,{observe:'response'});
    }
  // Créer un admin
  createUserAdmin(userData: any): Observable<any> {
    console.log(userData);
    return this.http.post(`${this.baseUrl}/api/v1/user/registerAdmin`, userData,{observe:'response'});
  }
    setRegistredUser(user : User){
      this.regitredUser=user;
      }
      getRegistredUser(){
        return this.regitredUser;
        }

    getToken(): string {
      return this.token;
    }

    saveToken(jwt: string) {
      localStorage.setItem('jwt', jwt);
      this.token = jwt;
      this.isloggedIn = true;
      this.decodeJWT();
    }

    decodeJWT() {
      if (this.token == undefined)
        return;
      const decodedToken = this.helper.decodeToken(this.token);
      this.roles = decodedToken.roles;
      this.loggedUser = decodedToken.sub;
    }

    loadToken() {
      this.token = localStorage.getItem('jwt')!;
      this.decodeJWT();
    }

    logout() {
      this.loggedUser = undefined!;
      this.roles = undefined!;
      this.token = undefined!;
      this.isloggedIn = false;
      localStorage.removeItem('jwt');
      this.router.navigate(['/login']);
    }



    isAdmin(): Boolean {
      if (!this.roles)
        //this.roles== undefiened
        return false;
      return this.roles.indexOf('ADMIN') > -1;
    }

    isTokenExpired(): Boolean {
      return this.helper.isTokenExpired(this.token);
    }
    validateEmail(code : string){
      return this.http.get<any>(`${this.baseUrl}/api/v1/user/verifyEmail/`+code);
      }
  deleteUser(id: number):Observable<any>{

    return this.http.delete(`${this.baseUrl}/api/v1/user/deluser/${id}`);

  }


}
