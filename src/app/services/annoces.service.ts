import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/service/auth.service';
import { Annonce } from '../model/annonce.model';
import {User} from "../model/user.model";
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AnnocesService {
annonces!:Annonce[];
annonce!:Annonce;
  users!:User[];
  user!:User;

  apiUrl = 'http://localhost:8082/users/api/v1/anonnce';
  apiUrl1 = 'http://localhost:8082/users/api/v1/user/users';
  apiUrl2 = 'http://localhost:8082/users/api/v1/user/admins';



  constructor(private http: HttpClient,private authService: AuthService) { }


  //methode pour recupérer la listes des annoces
  getAnnonces(): Observable<Annonce[]> {
    (console.log(this.authService.getToken()))
     return this.http.get<Annonce[]>(`${this.apiUrl}`);

  }
  getUsers(): Observable<User[]> {
    (console.log(this.authService.getToken()))
    return this.http.get<User[]>(`${this.apiUrl1}`);

  }
  getAdmins(): Observable<User[]> {
    (console.log(this.authService.getToken()))
    return this.http.get<User[]>(`${this.apiUrl2}`);

  }

  //methode pour recupérer une annoce
  getAnnonce(id: number): Observable<any> {

       return this.http.get<any>(`${this.apiUrl}/getbyid/${id}`);
  }

  //methode pour ajouter une annonce
  addAnnonce(annonce: Annonce): Observable<Annonce> {

    return this.http.post<Annonce>(`${this.apiUrl}`, annonce);
  }

  //update une annonce
  updateAnnonce(annonce: any): Observable<any> {
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.put(`${this.apiUrl}/updateannonce`, annonce,{headers:httpHeaders});
  }

  //methode pour supprimer une annonce
  deleteAnnoce(id: number):Observable<any>{

    return this.http.delete(`${this.apiUrl}/delpro/${id}`)

  }

}

