import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BurgerMenuComponent } from '../../landingpage/burger-menu/burger-menu.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    BurgerMenuComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
/**
 * Checks whether the burger menu is open or not
 */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
