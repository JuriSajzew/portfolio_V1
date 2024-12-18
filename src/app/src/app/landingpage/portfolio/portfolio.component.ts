import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projectImg: string[] = [
    'assets/img/join.png',
    'assets/img/El_Pollo_loco.png',
    'assets/img/videoflix.png',
  ];

  projectName: string[] = [
    'Join',
    'El Pollo Loco',
    'Videoflix',
  ];

  framework: string[] = [
    'HTML | CSS | JavaScript',
    'JavaScript | HTML | CSS',
    'Angular | Django',
  ];

  liveUrls: string[] = [
    'https://join.juridev.de',
    'https://el-pollo-loco.juridev.de',
    'https://videoflix.juridev.de'
  ];

  githubFrontendUrls: string[] = [
    'https://github.com/JuriSajzew/Join_Project',
    'https://github.com/JuriSajzew/El_pollo_loco',
    'https://github.com/JuriSajzew/videoflix_frontend'
  ];

  githubBackendUrls: string[] = [
    '',
    '',
    'https://github.com/JuriSajzew/videoflix_backend'
  ];

  redirectToUrl(type: string, index: number) {
    if (type === 'live') {
      window.open(this.liveUrls[index], '_blank');
    } else if (type === 'github') {
      window.open(this.githubFrontendUrls[index], '_blank');
    } else if (type === 'githubBackend') {
      window.open(this.githubBackendUrls[index], '_blank');
    }
  }
}
