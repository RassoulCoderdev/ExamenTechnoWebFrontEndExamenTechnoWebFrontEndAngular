import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnneeService {

  apiUrl ="endpoint//api/v1/annee";

  constructor(private http: HttpClient) { }

  //methode pour recupérer les années
  getAnnees(): any {
    return this.http.get(`${this.apiUrl}/`);
  }

  //methode pour ajouter une année
  addAnnee(annee: any): any {
    return this.http.post(`${this.apiUrl}/`, annee);
  }

  //methode pour update une année
  updateAnnee(annee: any): any {
    return this.http.put(`${this.apiUrl}/updateannee`, annee);
  }

  //methode pour supprimer une année
  deleteAnnee(id: number): any {
    return this.http.delete(`${this.apiUrl}/delannee/${id}`)
    
  }
}
