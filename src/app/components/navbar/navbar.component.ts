import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private products = '../../../assets/files.json/products.json';

  productsVisible: boolean = false;
  smartphone_toggle: boolean = false;
  smartphone: boolean = false;
  [key: string]: any;

  changeBoolean(propertyName: string) {
      this[propertyName] = !this[propertyName];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (window.innerWidth >= 500) {
      this.smartphone = false;
    } else {
      this.smartphone = true;
    }
  }

}
