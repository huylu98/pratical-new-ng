import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  /**
   * @input productList - the Product[] passed to us
   */
  @Input() productList!: ProductModel[];

  /**
   * @output onProductSelected - outputs the current
   *
   Product whenever a new Product is selected
   */
  @Output() onProductSelected!: EventEmitter<ProductModel>;

  /**
   * @property currentProduct - local state containing
   *
   the currently selected `Product`
   */
  private currentProduct!: ProductModel;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  clicked(product: ProductModel): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: ProductModel): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}
