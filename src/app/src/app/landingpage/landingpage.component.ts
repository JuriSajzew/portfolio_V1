import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
