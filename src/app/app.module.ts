import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { NavComponent } from './includes/navigation/nav.component';
import { FooterComponent } from './includes/footer/footer.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',redirectTo: 'home', pathMatch: 'full'},
      {path:'home', component: HomeComponent },
      {path:'login', component: LoginComponent },
      {path:'admin', component: AdminComponent},
      {path:'**',component: NotFoundComponent}
    ]) 
    ],
  declarations: [ 
    AppComponent, 
    LoginComponent, 
    HomeComponent, 
    AdminComponent,
    NavComponent,
    FooterComponent,
    NotFoundComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
