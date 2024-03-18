import { Routes } from '@angular/router';
import { LandingpageComponent } from './src/app/landingpage/landingpage.component';
import { ImpressumComponent } from './src/app/landingpage/impressum/impressum.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'impressum', component: ImpressumComponent },
];
