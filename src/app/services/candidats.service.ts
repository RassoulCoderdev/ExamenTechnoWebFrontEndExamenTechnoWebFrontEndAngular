import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandidatsService {

  apiUrl = 'http://localhost:8082/users/api/v1/postule';

  constructor(private http: HttpClient) { }

  //Methode pour recupérer les candidats
  getCandidats(): any {
    return this.http.get(`${this.apiUrl}/user`);
  }

  //Methode pour ajouter un candidat
  postulerCandidat(id: any, candidat: any): any {
    return this.http.post(`${this.apiUrl}/candidats/${id}`, candidat);
  }

  //methode pour l'update de candidate
  updateCandidat(candidat: any): any {
    return this.http.put(`${this.apiUrl}/candidats/${candidat.id}`, candidat);
  }


}
