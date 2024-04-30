import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentdetailsformComponent } from './paymentdetails/paymentdetailsform/paymentdetailsform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './header/header.component';
import { PoliciesComponent } from './policies/policies.component';
@NgModule({
  declarations: [
    AppComponent,
    UserdetailsComponent,
    LoginComponent,
    PaymentdetailsComponent,
    PaymentdetailsformComponent,
    HeaderComponent,
    PoliciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
