import { Product } from './product';

describe('Product', () => {
  it('stores every supplied product field', () => {
    const product = new Product(1, 'SS-S9', 'Samsung Galaxy S9', 500, 50, 'assets/images_atelier2/samsung-s9.png');
    expect({ ...product }).toEqual({ id: 1, code: 'SS-S9', name: 'Samsung Galaxy S9', price: 500, quantity: 50, image: 'assets/images_atelier2/samsung-s9.png' });
  });

  it('allows a product without a supplied image', () => {
    expect(new Product(2, 'NK-5P', 'Nokia 5.1 Plus', 60, 60).image).toBe('');
  });
});
