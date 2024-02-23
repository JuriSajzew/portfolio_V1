import { Component, OnDestroy, OnInit } from '@angular/core';
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
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  colorClass: string = 'button-header';

  changeStyle(event: MouseEvent) {
    this.colorClass = event.type === 'mouseover' ? 'button-header:hover' : 'button-header';
  }
}
