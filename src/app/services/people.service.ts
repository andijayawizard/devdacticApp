import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { People } from '../interfaces/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;
  options = {
    headers: { 'X-API-Key': this.apiKey },
  };
  constructor(private http: HttpClient, private router: Router) {}
  getAll(): Observable<People> {
    return this.http.get<People>(
      `${this.apiUrl}/api/api.php/records/tbl_people`,
      this.options
    );
  }
  getDetail(id: number): Observable<People> {
    return this.http.get<People>(
      `${this.apiUrl}/api/api.php/records/tbl_people/${id}`,
      this.options
    );
  }
}
