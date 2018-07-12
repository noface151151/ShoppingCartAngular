import { ShoppingCart } from './../../shared/shoppingcart.model';
import { ShoppingcartService } from './../../shared/shoppingcart.service';
import { Product } from './../../shared/product.model';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  constructor(private shoppingCartService: ShoppingcartService) { }

  ngOnInit() {
  }
  onAddShoppingCart(product: Product) {
    const shoppingCart = new ShoppingCart(product.productName, 1, product.productPrice, product.imageLink);
    this.shoppingCartService.addShoppingCart(shoppingCart);
  }
}
