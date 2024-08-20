import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  @Input() product?: any

}
