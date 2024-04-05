import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string;
  
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl; 
  }

  searchPeople(term?: string, color?: string): Observable<any> {
    const params = {};
    if (term) {
      params['term'] = term;
    }
    if (color) {
      params['color'] = color;
    }
    return this.http.get<any>(`${this.baseUrl}/search`, { params });
  }

  getPersonDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/details/${id}`);
  }
}

