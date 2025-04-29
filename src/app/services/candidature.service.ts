import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidature } from '../model/candidature.model';

@Injectable({ providedIn: 'root' })
export class CandidatureService {
  private apiUrl = 'http://localhost:8082/users/api/v1/postule';
  private apiUrl1 = 'http://localhost:8082/users/api/v1/user/alll';


  constructor(private http: HttpClient) {}

  createCandidature(candidature: Candidature): Observable<any> {
    const formData = new FormData();
    formData.append('candidature', JSON.stringify(candidature));
    return this.http.post<Candidature>(this.apiUrl, formData);
  }

  getAllCandidatures(): Observable<Candidature[]> {
    return this.http.get<Candidature[]>(this.apiUrl1);
  }
}