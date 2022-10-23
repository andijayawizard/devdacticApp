import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrlTomat: string = environment.apiUrlTomat;
  apiKey: string = environment.apiKey;
  options = { headers: { 'X-API-Key': this.apiKey } };

  constructor(private httpClient: HttpClient) {}
  read(page: number = 1): Observable<Product> {
    return this.httpClient.get<Product>(
      `${this.apiUrlTomat}/api.php/records/prod?page=${page},10`,
      this.options
    );
  }
  details(id: number): Observable<Product> {
    return this.httpClient.get<Product>(
      `${this.apiUrlTomat}/api.php/records/prod/${id}`,
      this.options
    );
  }
  create(): Observable<Product> {
    return this.httpClient.post<Product>(
      `${this.apiUrlTomat}/api.php/records/prod`,
      this.options
    );
  }
  update(id: number): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.apiUrlTomat}/api.php/records/prod/${id}`,
      this.options
    );
  }
  delete(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(
      `${this.apiUrlTomat}/api.php/records/prod/${id}`,
      this.options
    );
  }
}
