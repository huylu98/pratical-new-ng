import {Component, Input, HostBinding, OnInit} from '@angular/core';
import {ProductModel} from "../product.model";

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product!: ProductModel;
  @HostBinding('attr.class') cssClass = 'item';

  constructor() {
  }

  ngOnInit(): void {
  }

}
