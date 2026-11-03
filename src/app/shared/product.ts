export class Product {
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public price: number,
    public quantity: number,
    public image = '',
  ) {}
}
