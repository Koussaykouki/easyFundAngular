import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';

import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { ClaimsComponent } from './BackOffice/claims/claims.component';
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';
import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { LoginfrontComponent } from './FrontOffice/loginfront/loginfront.component';
import { SendresetcodeComponent } from './BackOffice/sendresetcode/sendresetcode.component';
import { ResetPasswordComponent } from './BackOffice/reset-password/reset-password.component';
import { SendresetcodefrontComponent } from './FrontOffice/sendresetcodefront/sendresetcodefront.component';
import { ResetpasswordfrontComponent } from './FrontOffice/resetpasswordfront/resetpasswordfront.component';


const routes: Routes = [
  {
    path: '',
    component: AllTemplateFrontComponent
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children: [
      {
        path: '',
        component: HomebackComponent,
       
      },
      {
        path: 'claims',
        component: ClaimsAllComponent
      }
    ]
  },
  {
    path: 'front',
    component: AllTemplateFrontComponent,
    children: [
      {
        path: '',
        component: RegisterComponent,
       
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginfrontComponent
      },
      {
        path: 'sendcodefront',
        component: SendresetcodefrontComponent
      },
      {
        path: 'resetpasswordfront',
        component: ResetpasswordfrontComponent
      }
    ]
  },
  {
    path: 'addoffre',
    component: OffreComponent
  },
  {
    path: 'excel',
    component: ExcelComponent
  },
  {
    path: 'financings/:id',
    component: FinancingsComponent
  },{

    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent

  },
  {
    path: 'sendresetcode',
    component: SendresetcodeComponent

  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent

  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent

  }
  
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

