import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PoliciesComponent } from './policies/policies.component';
import { PaymentGuard } from './guard/guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user', component: UserdetailsComponent },
  { path: 'payment', component: PaymentdetailsComponent, canActivate:[PaymentGuard]},
  { path: 'policy', component: PoliciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
