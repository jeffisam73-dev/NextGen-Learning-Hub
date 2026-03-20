import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing';
import { SignupComponent } from './signup/signup';
import { LoginComponent } from './login/login';
import { ForgotComponent } from './forgot/forgot';
import { CourseListComponent } from './course-list/course-list';
import { EnrollmentFormComponent } from './enrollment-form/enrollment-form';
import { TermsComponent } from './terms/terms';
import { PaymentComponent } from './payment/payment';
import { PaymentSuccessComponent } from './payment-success/payment-success';


  export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'landing', component: LandingComponent },

  { path: 'signup', component: SignupComponent },

  { path: 'login', component: LoginComponent },

  { path: 'forgot', component: ForgotComponent },

  { path: 'courses', component: CourseListComponent },

  { path: 'enroll', component: EnrollmentFormComponent },

  { path: 'terms', component: TermsComponent },

  { path: 'payment', component: PaymentComponent },

  { path: 'success', component: PaymentSuccessComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

