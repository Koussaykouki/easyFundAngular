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
import { OfferService  } from './services/offer.service';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FinancingsComponent } from './BackOffice/financings/financings.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExcelComponent } from './BackOffice/excel/excel.component';
import { FormBuilder, FormGroup, Validators,FormsModule } from '@angular/forms';
import { saveAs } from 'file-saver';

import { LoginComponent } from './BackOffice/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './BackOffice/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule




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
    ExcelComponent
    

    LoginComponent,
    RegistrationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
    
  ],
  providers: [
    provideAnimationsAsync()

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
