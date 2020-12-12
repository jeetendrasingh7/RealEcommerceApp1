import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BussinessappComponent } from './bussinessapp/bussinessapp.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { SignupComponent } from './signup/signup.component';
import { ChangeComponent } from './change/change.component';



const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"app",component:BussinessappComponent
  },
  {
    path:"work",component:HowItWorkComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"help",component:HelpComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"change",component:ChangeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

