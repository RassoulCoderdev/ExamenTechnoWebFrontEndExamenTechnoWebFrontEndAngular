import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private apiUrl = 'http://localhost:8082/users/api/v1/document';
 private document!: Document;
  constructor(private http: HttpClient) {}

  uploadDocument(file: File, candidatureId: number): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('candidatureId', candidatureId.toString());
  
    return this.http.post(`${this.apiUrl}/envoyer`, formData, {
      responseType: 'text'  // Indique que la réponse est attendue en texte brut
    });
  }
  

  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.apiUrl}/docs`);
  }
}
