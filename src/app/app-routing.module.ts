import { NgModule } from '@angular/core';
import { RouterModule, Routes, withInMemoryScrolling } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';
import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';

import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';

import { HomebackComponent } from './BackOffice/homeback/homeback.component';
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

import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';

import { OfferDetailsComponent } from './FrontOffice/offer-details/offer-details.component';
import { FiancingFrontComponent } from './FrontOffice/fiancing-front/fiancing-front.component';
import { DevisExcelComponent } from './FrontOffice/devis-excel/devis-excel.component';
import { MyFinancingsComponent } from './FrontOffice/my-financings/my-financings.component';
import { StripeComponent } from './FrontOffice/stripe/stripe.component';
import { AddclaimComponent } from './FrontOffice/addclaim/addclaim.component';
import { UserListComponent } from './BackOffice/user-list/user-list.component';
import { ViewInsuranceComponent } from './BackOffice/view-insurance/viewInsurance.component';
import { CreateInsuranceComponent } from './BackOffice/create-insurance/createInsurance.component';
import { InsuranceComponent } from './FrontOffice/insurance/insurance.component';
import { ViewInsuranceContractComponent } from './BackOffice/view-insurance-contracts/viewInsuranceContracts.component';
import { ContractRequestComponent } from './FrontOffice/contract-request/contractRequest.component';
const routes: Routes = [
  {
    path: '',
    component: AllhomefrontComponent,

    children: [
      {
        path: '',
        component: HomefrontComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
  },
  {
    path: 'financingRequest',
    component: FinancingRequestComponent,
  },
  {
    path: 'myfinancing',
    component: MyFinancingsComponent,
  },
  {
    path: 'pay',
    component: StripeComponent,
  },
  {
    path: 'devis',
    component: DevisExcelComponent,
  },
  { path: 'offer-details', component: OfferDetailsComponent, outlet: 'popup' },

  { path: 'demandFinancing', component: FiancingFrontComponent },

  {
    path: 'offerFront',
    component: OfferComponent,
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
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent,
      },
      {
        path: 'claims',
        component: ClaimsAllComponent,
      },
      {
        path: 'users',
        component: UserListComponent,
      },
      {
        path: 'create-insurance',
        component: CreateInsuranceComponent,
      },
      {
        path: 'view-insurance',
        component: ViewInsuranceComponent,
      },
      {
        path: 'view-insurance-contract',
        component: ViewInsuranceContractComponent,
      },
    ],
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
        path: 'claimsallfront/:id',
        component: ClaimsallfrontComponent,
      },
      {
        path: 'contract/:id',
        component: ContractRequestComponent,
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
      },
      {
        path: 'offerFront',
        component: OfferComponent,
      },
      {
        path: 'claims',
        component: ClaimslistfrontComponent,
      },
      {
        path: 'addclaim',
        component: AddclaimComponent,
      },
      {
        path: 'devis',
        component: DevisExcelComponent,
      },
      {
        path: 'offer-details',
        component: OfferDetailsComponent,
        outlet: 'popup',
      },

      { path: 'demandFinancing', component: FiancingFrontComponent },
    ],
  },
  {
    path: 'home',
    component: AllhomefrontComponent,

    children: [
      {
        path: '',
        component: HomefrontComponent,
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
      },
      {
        path: 'contract/:id',
        component: ContractRequestComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'login',
        component: LoginfrontComponent,
      },
      {
        path: 'devis',
        component: DevisExcelComponent,
      },
      {
        path: 'sendcodefront',
        component: SendresetcodefrontComponent,
      },
      {
        path: 'resetpasswordfront',
        component: ResetpasswordfrontComponent,
      },

      {
        path: 'offer-details',
        component: OfferDetailsComponent,
        outlet: 'popup',
      },

      { path: 'demandFinancing', component: FiancingFrontComponent },
    ],
  },
  {
    path: 'addoffre',
    component: OffreComponent,
  },
  {
    path: 'excel',
    component: ExcelComponent,
  },
  {
    path: 'financings/:id',
    component: FinancingsComponent,
  },
  {
    path: 'sendresetcode',
    component: SendresetcodeComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'claimsaa',
    component: ClaimslistfrontComponent,
  },

  {
    path: 'insurance',
    component: InsuranceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
