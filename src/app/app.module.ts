import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddcollegeComponent } from './addcollege/addcollege.component';
import { AddbranchComponent } from './addbranch/addbranch.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OtpComponent } from './otp/otp.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DatePipe } from '@angular/common';
import { ResultComponent } from './result/result.component';
import { ShowresultComponent } from './showresult/showresult.component';
import { ResultdateComponent } from './resultdate/resultdate.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashComponent,
    AboutusComponent,
    AdminHomeComponent,
    AddcollegeComponent,
    AddbranchComponent,
    ForgotComponent,
    OtpComponent,
    ResetpasswordComponent,
    ResultComponent,
    ShowresultComponent,
    ResultdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:LoginComponent},
      {path:"register",component:RegisterComponent},
      {path:"login",component:LoginComponent},
      {path:"dash",component:DashComponent,canActivate:[AuthGuard]},
      {path:"home",component:HomeComponent},
      {path:"aboutus",component:AboutusComponent},
      {path:"adminhome",component:AdminHomeComponent,canActivate:[AuthGuard]},
      {path:"addcollege",component:AddcollegeComponent,canActivate:[AuthGuard]},
      {path:"addbranch",component:AddbranchComponent,canActivate:[AuthGuard]},
      {path:"forgot",component:ForgotComponent},
      {path:"otp",component:OtpComponent},
      {path:"resetpassword",component:ResetpasswordComponent},
      {path:"result",component:ResultComponent,canActivate:[AuthGuard]},
      {path:"resultdate",component:ResultdateComponent,canActivate:[AuthGuard]}
    ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
