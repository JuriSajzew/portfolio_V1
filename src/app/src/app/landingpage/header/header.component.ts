import { Component, OnDestroy, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  colorClass: string = 'button-header';

  changeStyle(event: MouseEvent) {
    this.colorClass = event.type === 'mouseover' ? 'button-header:hover' : 'button-header';
  }

  openGithub() {
    window.open("https://github.com/JuriSajzew", "_blank");
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/juri-sajzew-893a4a143/", "_blank");
  }
}
