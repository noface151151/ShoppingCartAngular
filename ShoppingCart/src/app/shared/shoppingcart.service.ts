import { ShoppingCart } from './shoppingcart.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  shoppingCartSelect = new EventEmitter<ShoppingCart[]>();
  sumPrice = new EventEmitter<number>();
  shoppingCarts: ShoppingCart[] = [];
  constructor() { }

  addShoppingCart(shoppingCart: ShoppingCart) {
    this.shoppingCarts.push(shoppingCart);

    this.shoppingCartSelect.emit(this.shoppingCarts.slice());
    this.sumPrice.emit(this.shoppingCarts.map((val) => {
      return val.productPrice * val.quantity;
    }).reduce((sum, el) => {
      return sum + el;
    }, 0));
  }
  getShoppingCart() {
    return this.shoppingCarts.slice();

  }

  removeShoppingcart(index) {
    this.shoppingCarts.splice(index, 1);
    this.shoppingCartSelect.emit(this.shoppingCarts.slice());
    this.sumPrice.emit(this.shoppingCarts.map((val) => {
      return val.productPrice * val.quantity;
    }).reduce((sum, el) => {
      return sum + el;
    }, 0));
  }

  changeQuantity(quantity, index) {
    if (quantity <= 0) {
      this.removeShoppingcart(index);
    } else {
      const shoppingCartUpdate = this.shoppingCarts[index];
      shoppingCartUpdate.quantity = quantity;
      this.shoppingCarts[index] = shoppingCartUpdate;
      this.shoppingCartSelect.emit(this.shoppingCarts.slice());
      this.sumPrice.emit(this.shoppingCarts.map((val) => {
        return val.productPrice * val.quantity;
      }).reduce((sum, el) => {
        return sum + el;
      }, 0));
    }
  }
}
