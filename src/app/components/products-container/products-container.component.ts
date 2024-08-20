import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import products from '../../../assets/files.json/products.json'
import { CardProductComponent } from '../card-product/card-product.component';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [
    CommonModule,
    CardProductComponent
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.scss'
})
export class ProductsContainerComponent {

  products: any[] = products;

}
