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
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component'  
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { OfferDetailsComponent } from './FrontOffice/offer-details/offer-details.component';
import { FiancingFrontComponent } from './FrontOffice/fiancing-front/fiancing-front.component';
import { DevisExcelComponent } from './FrontOffice/devis-excel/devis-excel.component';
import { MyFinancingsComponent } from './FrontOffice/my-financings/my-financings.component';
import { StripeComponent } from './FrontOffice/stripe/stripe.component';
const routes: Routes = [
 
  {
    path: 'financingRequest',
    component: FinancingRequestComponent
  },
  {
    path: 'myfinancing',
    component: MyFinancingsComponent
  },
  {
    path: 'pay',
    component: StripeComponent
  },
  {
    path: 'devis',
    component: DevisExcelComponent
  },
  { path: 'offer-details',
    component: OfferDetailsComponent, 
    outlet: 'popup'
   },
   
  { path: 'demandFinancing',
  component: FiancingFrontComponent
 },
  {
    path: 'offerFront',
    component: OfferComponent
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
        path: 'offerFront',
        component: OfferComponent
       
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'devis',
        component: DevisExcelComponent
      },
      { path: 'offer-details',
        component: OfferDetailsComponent, 
        outlet: 'popup'
       },
       
      { path: 'demandFinancing',
      component: FiancingFrontComponent
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

