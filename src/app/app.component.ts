import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { BubbleComponent } from './component/template/bubble/bubble.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  BubbleComponent,
  RouterOutlet,
  HomeComponent,
  NavbarComponent,
  FooterComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'angularOptica';
}
