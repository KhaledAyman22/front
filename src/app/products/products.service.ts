import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {product} from '../types/entities';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://your-api-url.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.apiUrl);
  }

  addProduct(product: product): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
}
