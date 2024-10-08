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
  smartphone: boolean = true;
  [key: string]: any;

  ngOnInit() {
    this.checkWindowSize();
  }

  changeBoolean(propertyName: string) {
      this[propertyName] = !this[propertyName];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (window.innerWidth >= 450) {
      this.smartphone = false;
    } else {
      this.smartphone = true;
    }
  }

}
