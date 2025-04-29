import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDocService {

  apiUrl ="endpoint de l'api";
  
  constructor(private http: HttpClient) { }

  //methode pour envoyer des documents
  sendDocument(file: File, userId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userId.toString());

    return this.http.post(`${this.apiUrl}/envoyer`, formData);
  }

  //methode pour recuperer les documents
  getDocuments(userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/docs/${userId}`);
  }

  //Methode pour recuperer un document
  getDocument(userId: number, docId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/files/${userId}/${docId}`);
  }
}
