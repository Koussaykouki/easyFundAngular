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
    ClaimsAllComponent,
    ClaimDetailsComponent,
    ClaimsListComponent,
    YourOpenClaimsComponent,
    HomebackComponent,
    OfferDetailsComponent,
    FiancingFrontComponent,
    DevisExcelComponent
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
    SpreadsheetAllModule
    
    
    
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
