import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//register all the components here by creating route objects
export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'contact', component: ContactComponent},
    {path:'about', component: AboutComponent}
];
