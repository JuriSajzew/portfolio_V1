import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './myskills.component.html',
  styleUrl: './myskills.component.scss'
})
export class MyskillsComponent {
  mySkillsImg: string[] = [
    'assets/shadow/angular.svg',
    'assets/shadow/typescript.svg',
    'assets/shadow/javaScript.svg',
    'assets/shadow/html.svg',
    'assets/shadow/firebase.svg',
    'assets/shadow/git.svg',
    'assets/shadow/css.svg',
    'assets/shadow/rest_api.svg',
    'assets/shadow/scrum.svg',
    'assets/shadow/material_design.svg'
  ];

  skillsText: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design'
  ]
}
