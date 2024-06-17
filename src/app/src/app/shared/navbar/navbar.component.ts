import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { BurgerMenuComponent } from '../../landingpage/burger-menu/burger-menu.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    BurgerMenuComponent,
    TranslateModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent implements OnInit {
  languages = ['de', 'en'];
  private translateService = inject(TranslateService);
  isMenuOpen = false;
  dropdownOpen = false;

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }
  /**
   * Checks whether the burger menu is open or not
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
