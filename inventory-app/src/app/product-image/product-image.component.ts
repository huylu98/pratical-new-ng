import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {
  @Input() product!: ProductModel;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() {
  }

  ngOnInit(): void {
  }

}
