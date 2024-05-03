import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { OffreComponent } from './BackOffice/offre/offre.component';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { ExcelComponent } from './BackOffice/excel/excel.component';
import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';

import { AuthInterceptor } from './services/auth.interceptor';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { ClaimDetailsComponent } from './BackOffice/claim-details/claim-details.component';
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';
import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component';

import { ClaimDetailsComponent } from './BackOffice/claim-details/claim-details.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { LoginfrontComponent } from './FrontOffice/loginfront/loginfront.component';
import { SendresetcodeComponent } from './BackOffice/sendresetcode/sendresetcode.component';
import { ResetPasswordComponent } from './BackOffice/reset-password/reset-password.component';
import { ResetpasswordfrontComponent } from './FrontOffice/resetpasswordfront/resetpasswordfront.component';
import { SendresetcodefrontComponent } from './FrontOffice/sendresetcodefront/sendresetcodefront.component';
import { AuthGuard } from './services/auth.guard';
import { AuthGuardFront } from './services/authfront.guard';
import { HomefrontComponent } from './FrontOffice/homefront/homefront.component';
import { AllhomefrontComponent } from './FrontOffice/allhomefront/allhomefront.component';
import { HeaderhomeFrontComponent } from './FrontOffice/headerhome-front/headerhome-front.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateBackComponent,
    OffreComponent,
    FinancingsComponent,
    ExcelComponent,
    LoginComponent,
    RegistrationComponent,
    FinancingRequestComponent,
    OfferComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    RegisterComponent,

    LoginfrontComponent,
    SendresetcodeComponent,
    ResetPasswordComponent,
    ResetpasswordfrontComponent,
    SendresetcodefrontComponent,
    HomefrontComponent,
    AllhomefrontComponent,
    HeaderhomeFrontComponent,
    
    
    
    
    

    ClaimsAllComponent,
    ClaimDetailsComponent,
    ClaimsListComponent,
    YourOpenClaimsComponent,
    HomebackComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
