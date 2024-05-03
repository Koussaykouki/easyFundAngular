import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';

import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { MicrocreditsComponent } from './BackOffice/credit/microcredits/microcredits.component';
import { MicroCreditListComponent } from './BackOffice/credit/micro-credit-list/micro-credit-list.component';
import { MyMicroCreditsComponent } from './BackOffice/credit/my-micro-credits/my-micro-credits.component';



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

  }
  ,
  {
    path: 'admin/claims',
    component: RegistrationComponent
  },
  {
    path: 'credit/applyMicrocredit',
    component: MicrocreditsComponent
  },
  {
    path: 'credit/getCreditByConnectedUser',
    component: MyMicroCreditsComponent
  },
  {
    path: 'admin/getAllMicroCredits',
    component: MicroCreditListComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

