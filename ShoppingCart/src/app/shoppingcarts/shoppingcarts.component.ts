import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ShoppingcartService } from '../shared/shoppingcart.service';
import { ShoppingCart } from '../shared/shoppingcart.model';
import { Subscription } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-shoppingcarts',
  templateUrl: './shoppingcarts.component.html',
  styleUrls: ['./shoppingcarts.component.css']
})
export class ShoppingcartsComponent implements OnInit, OnDestroy {

  constructor(private shoppingCartService: ShoppingcartService) { }
  @Input() shoppingCarts: ShoppingCart[];
  @Input() sumPrice: number;
  // subScription: Subscription;
  ngOnInit() {
    // this.shoppingCarts = this.shoppingCartService.getShoppingCart();
    // this.subScription = this.shoppingCartService.shoppingCartSelect.subscribe((shoppingcarts) => {
    //   this.shoppingCarts = shoppingcarts;
    // });
  }
  ngOnDestroy() {
    // this.subScription.unsubscribe();
  }
  onRemove(index) {
    this.shoppingCartService.removeShoppingcart(index);
  }
  onChange(quantity, index) {
    this.shoppingCartService.changeQuantity(quantity, index);
  }
}
