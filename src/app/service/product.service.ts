import { Injectable } from '@angular/core';
import { Product } from '../shared/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product(
      1,
      'SS-S9',
      'Samsung Galaxy S9',
      500.0,
      50,
      'assets/images_atelier2/samsung-s9.png',
    ),
    new Product(2, 'NK-5P', 'Nokia 5.1 Plus', 60.0, 60, 'assets/images_atelier2/no-image.png'),
    new Product(
      3,
      'IP-7',
      'iPhone 7',
      600.0,
      30,
      'assets/images_atelier2/iphone-7.png',
    ),
    new Product(
      4,
      'XI-14',
      'Redmi 14',
      1200.0,
      50,
      'assets/images_atelier2/xiaomi-14.png',
    ),
  ];
  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
