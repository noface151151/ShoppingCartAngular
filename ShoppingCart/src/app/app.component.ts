import { ShoppingCart } from './shared/shoppingcart.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from './shared/shoppingcart.service';
import { Subscription } from '../../node_modules/rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // subScription: Subscription;
  shoppingCarts: ShoppingCart[];
  sumPrice: number;
  constructor(private shoppingCartService: ShoppingcartService) {

  }
  ngOnInit() {
    this.shoppingCartService.shoppingCartSelect.subscribe((shoppingcarts) => {
      this.shoppingCarts = shoppingcarts;
    });
    this.shoppingCartService.sumPrice.subscribe((sumPrice) => {
      this.sumPrice = sumPrice;
    });
  }
}
