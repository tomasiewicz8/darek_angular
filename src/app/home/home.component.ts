import { Component } from '@angular/core';
import { BackgroundComponent } from '../components/background/background.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductsContainerComponent } from '../components/products-container/products-container.component';
import { GaleryComponent } from '../components/galery/galery.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BackgroundComponent,
    NavbarComponent,
    ProductsContainerComponent,
    GaleryComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
