import {Component} from '@angular/core';
import {ProductModel} from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: ProductModel[];

  constructor() {
    this.products = [
      new ProductModel('MYSHOES', 'Black Running Shoes', '/assets/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
      new ProductModel('NEATOJACKET', 'Blue Jacket', '/assets/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
      new ProductModel('NICEHAT', 'A Nice Black Hat', '/assets/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
    ];
  }

  productWasSelected(product: ProductModel): void {
    console.log(`${product} was clicked`);
  }
}
