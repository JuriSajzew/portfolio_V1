import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { url } from 'node:inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openGithub() {
    window.open("https://github.com/JuriSajzew", "_blank");
  }

  openLinkedIn() {
    window.open("https://www.linkedin.com/in/juri-sajzew-893a4a143/", "_blank");
  }
}
