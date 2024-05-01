import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';

import { OffreComponent } from './BackOffice/offre/offre.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferService } from './services/offer.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Uncomment if you are using animations
import { FinancingsComponent } from './BackOffice/financings/financings.component';
// import { MatDialogModule } from '@angular/material/dialog'; // Uncomment if using MatDialog
import { ExcelComponent } from './BackOffice/excel/excel.component';

import { LoginComponent } from './BackOffice/login/login.component';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { MicrocreditsComponent } from './BackOffice/microcredits/microcredits.component';

import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { MicroCreditService } from './services/microcredit.service';
import { AuthInterceptor } from './services/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateBackComponent,
    AllTemplateFrontComponent,
    OffreComponent,
    FinancingsComponent,
    ExcelComponent,
    LoginComponent,
    RegistrationComponent,
    MicrocreditsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // BrowserAnimationsModule, // Uncomment if using animations
    // MatDialogModule, // Uncomment if using MatDialog
  ],
  providers: [
    OfferService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

    // Add other services here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
