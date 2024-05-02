import { NgModule } from '@angular/core';
import { RouterModule, Routes,withInMemoryScrolling } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';
import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component'  
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
const routes: Routes = [
 
  {
    path: 'financingRequest',
    component: FinancingRequestComponent
  },
  {
    path: 'offerFront',
    component: OfferComponent
  },
  {
    path: 'admin',
    component: AllTemplateBackComponent,
    children:[
      {
        path: '',
        component: HomebackComponent
        
      },
    {
      path:'claims',
      component: ClaimsAllComponent
    }]
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
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
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

