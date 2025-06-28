import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { LazyLoadingRouteComponent } from './lazy-loading-route/lazy-loading-route.component';

//register all the components here by creating route objects
export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'contact', component: ContactComponent},
    // {path:'about', component: AboutComponent},
    {path:'profile', component: ProfileComponent},
    // {path:'lazy-load', component: LazyLoadingRouteComponent},//lazy loading route/ component
    //now this component will be lazily loaded when it is needed, i.e, when the route is called, apply this to heavy pages, less used pages
    {path:'lazy-load', loadComponent:()=>import('./lazy-loading-route/lazy-loading-route.component')
        .then((c)=>c.LazyLoadingRouteComponent)},

    {path:'user/:id/:name', component:UserComponent}, //what key u put here will be used to get data & place in url
    {path: '', component: HomeComponent}, //home will be on base path, so router link active
    //  will also apply to base as it is always active, so use router link active option
    
    // >>>> also ng from top starts to match the routes, so if you keep wildcard at start, other routes will fail <<<<<<
    {path: '**', component:PageNotFoundComponent} //this is called wild card matching,
    //  all pages except mentioned will have this component shown
];
