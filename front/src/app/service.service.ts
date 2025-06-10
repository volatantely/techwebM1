// product.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Service {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${this.apiUrl}/products`);
  }

  addToCart(productId: number, quantity: number) {
    return this.http.post(`${this.apiUrl}/cart`, { productId, quantity });
  }
}
