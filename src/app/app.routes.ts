import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { WhatwedoComponent } from './pages/whatwedo/whatwedo.component';
import { WeserveComponent } from './pages/weserve/weserve.component';
import { OurleadershipComponent } from './pages/ourleadership/ourleadership.component';
import { ContactComponent } from './pages/contact/contact.component';



export const routes: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: "full" },
    { path: '', component: HomeComponent, },
    { path: 'about-us', component: AboutusComponent, },
    { path: 'whatwedo', component: WhatwedoComponent, },
    { path: 'servedindustries', component: WeserveComponent, },
    { path: 'leadership', component: OurleadershipComponent, }
    , { path: 'contact', component: ContactComponent, }


];
