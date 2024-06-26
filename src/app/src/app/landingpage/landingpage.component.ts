import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutMeComponent,
    MyskillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

}
