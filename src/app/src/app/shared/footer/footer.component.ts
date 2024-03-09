import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { url } from 'node:inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openGithub() {
    window.open("https://github.com/JuriSajzew", "_blank");
  }

  openEmail() {
    window.open("https://google.com", "_blank");
  }

  openLinkedIn() {
    window.open("https://google.com", "_blank");
  }
}
