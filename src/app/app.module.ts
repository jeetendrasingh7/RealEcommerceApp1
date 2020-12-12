import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BussinessappComponent } from './bussinessapp/bussinessapp.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeComponent } from './change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BussinessappComponent,
    HowItWorkComponent,
    HeaderComponent,
    LoginComponent,
    HelpComponent,
    SignupComponent,
    ChangeComponent,
 
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

