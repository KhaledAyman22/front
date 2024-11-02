import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {category} from '../types/entities';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://your-api-url.com/categories';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<category[]> {
    return this.http.get<category[]>(this.apiUrl);
  }

  addCategory(name: string): Observable<any> {
    return this.http.post(this.apiUrl, { name });
  }
}
