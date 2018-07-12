import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ShoppingcartsComponent } from './shoppingcarts/shoppingcarts.component';
import { ShoppingcartItemComponent } from './shoppingcarts/shoppingcart-item/shoppingcart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    ShoppingcartsComponent,
    ShoppingcartItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
