import { Routes } from '@angular/router';
import { LandingpageComponent } from './src/app/landingpage/landingpage.component';
import { ImpressumComponent } from './src/app/landingpage/impressum/impressum.component';
import { PrivacyPolicyComponent } from './src/app/landingpage/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'imprint', component: ImpressumComponent },
    { path: 'privacy_policy', component: PrivacyPolicyComponent },
];
