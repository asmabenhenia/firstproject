import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { PRODUCTS } from '../shared/constants';

describe('ProductService', () => {
  let service: ProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });
  it('loads the four products from PRODUCTS', () => {
    expect(service.getProducts()).toEqual(PRODUCTS);
    expect(service.getProducts().map(product => product.id)).toEqual([1, 2, 3, 4]);
  });
  it('deletes only the selected product without changing PRODUCTS', () => {
    service.deleteProduct(2);
    expect(service.getProducts().map(product => product.id)).toEqual([1, 3, 4]);
    expect(PRODUCTS.map(product => product.id)).toEqual([1, 2, 3, 4]);
  });
  it('does not delete a product when the id does not exist', () => {
    service.deleteProduct(999);
    expect(service.getProducts().map(product => product.id)).toEqual([1, 2, 3, 4]);
  });
  it('allows deleting all products', () => {
    [1, 2, 3, 4].forEach(id => service.deleteProduct(id));
    expect(service.getProducts()).toEqual([]);
  });
});
