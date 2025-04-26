import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

//register all the components here by creating route objects
export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutComponent},
    {path:'profile', component: ProfileComponent},
    {path: '', component: HomeComponent}, //home will be on base path, so router link active
    //  will also apply to base as it is always active, so use router link active option
    
    // >>>> also ng from top starts to match the routes, so if you keep wildcard at start, other routes will fail <<<<<<
    {path: '**', component:PageNotFoundComponent} //this is called wild card matching,
    //  all pages except mentioned will have this component shown
];
