import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: AllTemplateFrontComponent
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

