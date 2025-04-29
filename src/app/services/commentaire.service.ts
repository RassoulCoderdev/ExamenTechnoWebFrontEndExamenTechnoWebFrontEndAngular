import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../model/commentaire .model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  private apiUrl = 'http://localhost:8082/users/api/v1/commentaires';

  constructor(private http: HttpClient) {}

  ajouterCommentaire(commentaire: Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(this.apiUrl, commentaire);
  }

  getCommentairesParAnnonce(idAnnonce: number): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(`${this.apiUrl}/annonce/${idAnnonce}`);
  }

}
