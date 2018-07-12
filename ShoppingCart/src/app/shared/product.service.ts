import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product('Banana',
      'Fruit',
      10000,
      'Some Description',
      'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg'
    ),
    new Product('Potato',
      'Vegetables',
      15000,
      'Some Description',
      'https://c1.staticflickr.com/3/2752/4215093413_27a023f610_z.jpg?zz=1'
    ),

    new Product('Meat',
      'Food',
      50000,
      'Some Description',
      'https://cdn.pixabay.com/photo/2018/04/09/08/43/meat-3303486_960_720.jpg'
    ),
    new Product('Bread',
      'Food',
      5000,
      'Some Description',
      'https://c1.staticflickr.com/3/2505/4126611734_993d897939_z.jpg?zz=1'
    )
  ];
  constructor() { }

  getProducts() {
    return this.products.slice();
  }
}
