import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './forms/contact/contact.component';
import { AboutComponent } from './forms/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './forms/blog/blog.component';
import { ModelsComponent } from './models/models/models.component';
import { ModelXComponent } from './models/model-x/model-x.component';
import { ModelMComponent } from './models/model-m/model-m.component';
import { ModelIComponent } from './models/model-i/model-i.component';
import { Model5Component } from './models/model5/model5.component';
import { Model3Component } from './models/model3/model3.component';
import { Model7Component } from './models/model7/model7.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    BlogComponent,
    ModelsComponent,
    ModelXComponent,
    ModelMComponent,
    ModelIComponent,
    Model5Component,
    Model3Component,
    Model7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
