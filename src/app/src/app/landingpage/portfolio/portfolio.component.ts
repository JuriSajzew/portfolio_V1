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
  ];

  projectName: string[] = [
    'Join',
    'El Pollo Loco'
  ];

  framework: string[] = [
    'Angular | Typescript | HTML | CSS | Firebase',
    'JavaScript | HTML | CSS'
  ];

  projectText: string[] = [
    'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.'
  ];

  liveUrls: string[] = [
    'https://join.juridev.de',
    'https://el-pollo-loco.juridev.de'
  ];

  githubUrls: string[] = [
    'https://github.com/JuriSajzew/Join_Project',
    'https://github.com/JuriSajzew/El_pollo_loco'
  ];

  redirectToUrl(type: string, index: number) {
    if (type === 'live') {
      window.open(this.liveUrls[index], '_blank');
    } else if (type === 'github') {
      window.open(this.githubUrls[index], '_blank');
    }
  }
}
