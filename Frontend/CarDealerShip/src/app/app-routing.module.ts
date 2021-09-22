import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './forms/about/about.component';
import { BlogComponent } from './forms/blog/blog.component';
import { ContactComponent } from './forms/contact/contact.component';
import { ServicesComponent } from './forms/services/services.component';
import { LoginComponent } from './login/login.component';
import { ModelIComponent } from './models/model-i/model-i.component';
import { ModelMComponent } from './models/model-m/model-m.component';
import { ModelXComponent } from './models/model-x/model-x.component';
import { Model3Component } from './models/model3/model3.component';
import { Model5Component } from './models/model5/model5.component';
import { Model7Component } from './models/model7/model7.component';
import { ModelsComponent } from './models/models/models.component';

const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'About', component: AboutComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Blog', component: BlogComponent},
  {path: 'Services', component: ServicesComponent},
  {path: 'Models', component: ModelsComponent},
  {path: 'ModelX', component: ModelXComponent},
  {path: 'ModelM', component: ModelMComponent},
  {path: 'ModelI', component: ModelIComponent},
  {path: 'Model3', component: Model3Component},
  {path: 'Model5', component: Model5Component},
  {path: 'Model7', component: Model7Component},
  {path:'', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
