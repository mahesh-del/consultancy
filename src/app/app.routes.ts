import { Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { CareersComponent } from './components/careers/careers.component';
import { BusinessComponent } from './components/business/business.component';
import { CareerDetailsComponent } from './components/career-details/career-details.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'careers/:title', component: CareerDetailsComponent },
    { path: 'business-process-consulting', component: BusinessComponent },

];
