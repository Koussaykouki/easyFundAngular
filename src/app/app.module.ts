import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBackComponent } from './BackOffice/footer-back/footer-back.component';
import { NavbarBackComponent } from './BackOffice/navbar-back/navbar-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';

import { OffreComponent } from './BackOffice/offre/offre.component';

import { OfferService  } from './services/offer.service';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcelComponent } from './BackOffice/excel/excel.component';

import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';
import {provideRouter, withInMemoryScrolling } from '@angular/router';
import { LoginComponent } from './BackOffice/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component'; // Import ReactiveFormsModule




@NgModule({
  declarations: [
    AppComponent,
    FooterBackComponent,
    NavbarBackComponent,
    SidebarBackComponent,
    AllTemplateBackComponent,
    OfferComponent,
    OffreComponent,
    FinancingsComponent,
    ExcelComponent,
    

    LoginComponent,
    RegistrationComponent,
    FinancingRequestComponent,
    OfferComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    NgbModule
    
  ],
  providers: [
    provideAnimationsAsync(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
