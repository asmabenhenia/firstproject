import { TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from '../service/product.service';
import { Product } from '../shared/product';

describe('ProductsComponent', () => {
  it('loads service products and passes each product to its details component', async () => {
    const products = [new Product(1, 'A', 'Phone A', 100, 5), new Product(2, 'B', 'Phone B', 200, 8)];
    const getProducts = jasmine.createSpy('getProducts').and.returnValue(products);
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ProductsComponent, ProductDetailsComponent],
      providers: [{ provide: ProductService, useValue: { getProducts } }],
    }).compileComponents();
    const fixture = TestBed.createComponent(ProductsComponent);
    fixture.detectChanges();
    expect(getProducts).toHaveBeenCalledTimes(1);
    expect(fixture.componentInstance.products).toEqual(products);
    const details = fixture.debugElement.queryAll(By.directive(ProductDetailsComponent));
    expect(details.length).toBe(2);
    expect(details.map(detail => detail.componentInstance.product)).toEqual(products);
  });
});
