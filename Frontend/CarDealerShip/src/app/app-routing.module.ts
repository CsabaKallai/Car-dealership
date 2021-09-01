import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './forms/about/about.component';
import { ContactComponent } from './forms/contact/contact.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
