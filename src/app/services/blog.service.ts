import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  apiUrl: string = environment.apiUrl;
  apiKey: string = environment.apiKey;
  httpOptions = { headers: new HttpHeaders({ 'X-API-Key': this.apiKey }) };
  constructor(private httpClient: HttpClient) {}
  getAllBlog() {
    return this.httpClient.get<Blog>(
      `${this.apiUrl}/api/api.php/records/blog`,
      this.httpOptions
    );
  }
  getDetail(id: number) {
    return this.httpClient.get<Blog>(
      `${this.apiUrl}/api/api.php/records/blog/${id}`,
      this.httpOptions
    );
  }
}
