import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {AppAuthGuard} from './app.authguard';


const routes: Routes = [
{path:'', component:HomeComponent},
{path:'about', component:AboutComponent,canActivate:[AppAuthGuard],data:{roles:['SuperAdmin','storemanager']}},
{path:'contact',component:ContactComponent,canActivate:[AppAuthGuard],data:{roles:['SuperAdmin','storemanager']}}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AppAuthGuard]
})
export class AppRoutingModule { }
