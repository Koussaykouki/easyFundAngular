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

import { AuthInterceptor } from './services/auth.interceptor';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';
import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component';
import { OfferDetailsComponent } from './FrontOffice/offer-details/offer-details.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FiancingFrontComponent } from './FrontOffice/fiancing-front/fiancing-front.component';
import { DevisExcelComponent } from './FrontOffice/devis-excel/devis-excel.component';
import { SpreadsheetComponent, BeforeSaveEventArgs, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet';
import { DatePipe } from '@angular/common';
import { MyFinancingsComponent } from './FrontOffice/my-financings/my-financings.component';
import { StripeComponent } from './FrontOffice/stripe/stripe.component';



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
import { ClaimsallfrontComponent } from './FrontOffice/claimsallfront/claimsallfront.component';
import { ClaimslistfrontComponent } from './FrontOffice/claimslistfront/claimslistfront.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { ClaimDetailsComponent } from './BackOffice/claim-details/claim-details.component';

import { AllofferComponent } from './BackOffice/alloffer/alloffer.component';
import { OfferPopUpComponent } from './BackOffice/offer-pop-up/offer-pop-up.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

import { PerformanceLineChartComponent } from './BackOffice/performance-line-chart/performance-line-chart.component';
import { FinancingRequestAllComponent } from './BackOffice/financing-request-all/financing-request-all.component';
import { StatOfferComponent } from './BackOffice/stat-offer/stat-offer.component';



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
    ClaimsallfrontComponent,
    ClaimslistfrontComponent,
    
    
    
    
    

    ClaimsAllComponent,
    ClaimDetailsComponent,
    ClaimsListComponent,
    YourOpenClaimsComponent,

    HomebackComponent,
    OfferDetailsComponent,
    FiancingFrontComponent,

    DevisExcelComponent,
    MyFinancingsComponent,
    StripeComponent,

    AllofferComponent,
    OfferPopUpComponent,

    PerformanceLineChartComponent,
      FinancingRequestAllComponent,
      StatOfferComponent,


   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    

    NgbModule,
    MatDialogModule,
    GridModule,
    SpreadsheetAllModule,
    DropDownButtonModule
    
    
    
  ],
  providers: [
    provideAnimationsAsync(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
