import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Service } from '../interfaces/service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;
  httpOptions = { headers: new HttpHeaders({ 'X-API-Key': this.apiKey }) };
  constructor(private httpClient: HttpClient) {}
  getAllServices(page: number = 1): Observable<Service[]> {
    return this.httpClient
      .get<Service[]>(
        `${this.apiUrl}/api/api.php/records/tbl_services?page=${page},10`,
        this.httpOptions
      )
      .pipe(
        tap(() => {
          console.log('service fetched!');
        }),
        catchError(this.handleError<Service[]>('get service', []))
      );
  }
  getDetails(id: number): Observable<Service[]> {
    return this.httpClient
      .get<Service[]>(
        `${this.apiUrl}/api/api.php/records/tbl_services/${id}`,
        this.httpOptions
      )
      .pipe(
        tap(() => {
          console.log(`service fetched: ${id}`);
        }),
        catchError(this.handleError<Service[]>(`get service id=${id}`))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
