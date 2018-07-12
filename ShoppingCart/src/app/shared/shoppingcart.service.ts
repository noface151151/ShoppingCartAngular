import { ShoppingCart } from './shoppingcart.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  shoppingCarts: ShoppingCart[];
  constructor() { }

  addShoppingCart(shoppingCart: ShoppingCart ) {
     this.shoppingCarts.push(shoppingCart);
  }
  getShoppingCart(){
    return this.shoppingCarts.slice();
  }

  removeShoppingcart(index){
    let shoppingcarts=this.shoppingCarts.slice();
    shoppingcarts=shoppingcarts.splice(index,1);
    this.shoppingCarts=shoppingcarts;
  }
}
