import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [...PRODUCTS];

  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
