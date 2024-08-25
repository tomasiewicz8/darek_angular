import { Component } from '@angular/core';

import products_galery from '../../../assets/files.json/products-galery.json';

@Component({
  selector: 'app-galery',
  standalone: true,
  imports: [],
  templateUrl: './galery.component.html',
  styleUrl: './galery.component.scss'
})
export class GaleryComponent {

  interval_number: number = 0;
  select_image: string = '';
  interval: any;

  ngOnInit() {
    this.interval = setInterval( () => {
      this.interval_number++;
      this.select_image = products_galery[this.interval_number].image
      if (this.interval_number == products_galery.length - 1) {
        this.interval_number = 0;
      }
    }, 2000)
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  



}
