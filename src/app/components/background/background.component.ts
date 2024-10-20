import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {

  background: string = "";

  ngOnInit() {
    this.checkWindowSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    if (window.innerWidth > 450) {
      this.background = "backgroungHome.jpg";
    } else {
      this.background = "backgroungHomeTablet.jpg";
    }
  }
  
}
