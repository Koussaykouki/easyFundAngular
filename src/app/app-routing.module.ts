import { NgModule } from '@angular/core';
import { RouterModule, Routes,withInMemoryScrolling } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';
import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { MicrocreditsComponent } from './BackOffice/credit/microcredits/microcredits.component';
import { MicroCreditListComponent } from './BackOffice/credit/micro-credit-list/micro-credit-list.component';
import { MyMicroCreditsComponent } from './BackOffice/credit/my-micro-credits/my-micro-credits.component';
import { LoanCalculatorComponent } from './BackOffice/credit/loan-calculator/loan-calculator.component';
import { DashboardComponent } from './BackOffice/credit/loan-calculator/home/dashboard/dashboard.component';

import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component'
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';

import { LoginfrontComponent } from './FrontOffice/loginfront/loginfront.component';
import { SendresetcodeComponent } from './BackOffice/sendresetcode/sendresetcode.component';
import { ResetPasswordComponent } from './BackOffice/reset-password/reset-password.component';
import { SendresetcodefrontComponent } from './FrontOffice/sendresetcodefront/sendresetcodefront.component';
import { ResetpasswordfrontComponent } from './FrontOffice/resetpasswordfront/resetpasswordfront.component';
import { AuthGuard } from './services/auth.guard';
import { AuthGuardFront } from './services/authfront.guard';
import { HomefrontComponent } from './FrontOffice/homefront/homefront.component';
import { AllhomefrontComponent } from './FrontOffice/allhomefront/allhomefront.component';
import { ClaimsallfrontComponent } from './FrontOffice/claimsallfront/claimsallfront.component';
import { ClaimslistfrontComponent } from './FrontOffice/claimslistfront/claimslistfront.component';


import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';

import { OfferDetailsComponent } from './FrontOffice/offer-details/offer-details.component';
import { FiancingFrontComponent } from './FrontOffice/fiancing-front/fiancing-front.component';
import { DevisExcelComponent } from './FrontOffice/devis-excel/devis-excel.component';
import { MyFinancingsComponent } from './FrontOffice/my-financings/my-financings.component';
import { StripeComponent } from './FrontOffice/stripe/stripe.component';

import { AllofferComponent } from './BackOffice/alloffer/alloffer.component';

import { FinancingRequestAllComponent } from './BackOffice/financing-request-all/financing-request-all.component';
import { StatOfferComponent } from './BackOffice/stat-offer/stat-offer.component';


import { AddclaimComponent } from './FrontOffice/addclaim/addclaim.component';
import { UserListComponent } from './BackOffice/user-list/user-list.component';
import { ArchivedClaimsAllComponent } from './BackOffice/archived-claims-all/archived-claims-all.component';


const routes: Routes = [

  {

    path: '',
    component: AllTemplateFrontComponent,
  },{

    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'stat',
    component: StatOfferComponent
  },{



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

    canActivate: [AuthGuard],



    children: [
      {
        path: '',
        component: HomebackComponent,

      },
      {
        path: 'offer',
        component: AllofferComponent
      },
      {
        path: 'claims',
        component: ClaimsAllComponent

      },
      {
        path: 'archivedclaims',
        component: ArchivedClaimsAllComponent

      },{



        path: 'financingRequest',
        component: FinancingRequestComponent

      },
      {
        path: 'users',
        component: UserListComponent

      }
      ,{

         path: 'allf',
        component: FinancingRequestAllComponent
      }
    ]
  },
  {
    path: 'front',
    component: AllTemplateFrontComponent,
    canActivate: [AuthGuardFront],
    children: [
      {
        path: '',
        component: HomefrontComponent,

      },

         {
        path: 'simulator',
        component: LoanCalculatorComponent,

      },
      {
        path: 'applyMicrocredit',
        component: MicrocreditsComponent
      },
      {
        path: 'getCreditByConnectedUser',
        component: MyMicroCreditsComponent
      },
      {
        path: 'claimsallfront/:id',
        component: ClaimsallfrontComponent,
      },{
        path: 'offerFront',
        component: OfferComponent
      },
      {

        path: 'claims',
        component: ClaimslistfrontComponent,
      },
      {

        path: 'addclaim',
        component: AddclaimComponent,
      },{
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
       path: 'myfinancing',
       component: MyFinancingsComponent
     }
    ]
  },{
    path: 'home',
    component: AllhomefrontComponent,

    children: [
      {
        path: '',
        component: HomefrontComponent,
      },{

        path: 'register',
        component: RegisterComponent

      },
      {
        path:'login',
        component:LoginfrontComponent

      },
      {
        path: 'devis',
        component: DevisExcelComponent

      },
      {
        path: 'sendcodefront',
        component: SendresetcodefrontComponent
      },
      {
        path: 'resetpasswordfront',
        component: ResetpasswordfrontComponent},



      { path: 'offer-details',
        component: OfferDetailsComponent,
        outlet: 'popup'
       },

      { path: 'demandFinancing',
      component: FiancingFrontComponent
      },
      {
        path: 'addoffre',
        component: OffreComponent
      },{



        path: 'financingRequest',
        component: FinancingRequestComponent
      },{

   

        path: 'ALLF',
        component: FinancingRequestAllComponent
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
    path: 'claimsaa',
    component: ClaimslistfrontComponent

  },











 {


    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'register',
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
  {
    path: 'admin/simulator',
    component: LoanCalculatorComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
