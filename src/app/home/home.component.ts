import { Component } from '@angular/core';
import { BackgroundComponent } from '../components/background/background.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsContainerComponent } from '../components/products-container/products-container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BackgroundComponent,
    NavbarComponent,
    ProductsContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
