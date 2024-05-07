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
import { MicrocreditsComponent } from './BackOffice/credit/microcredits/microcredits.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MicroCreditService } from './services/microcredit.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { MicroCreditListComponent } from './BackOffice/credit/micro-credit-list/micro-credit-list.component';
import { MicroCreditDetailsComponent } from './BackOffice/credit/micro-credit-details/micro-credit-details.component';
import { MyMicroCreditsComponent } from './BackOffice/credit/my-micro-credits/my-micro-credits.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropzoneCdkModule } from '@ngx-dropzone/cdk';
import { DropzoneMaterialModule } from '@ngx-dropzone/material';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MessagesModule } from 'primeng/messages';
import { EditCreditStatusDialogComponentcomponent } from './BackOffice/credit/dialog_components/edit-credit-status-dialog-component/edit-credit-status-dialog-componentcomponent';
import { NumericTextBoxModule, SliderModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { LoanCalculatorComponent } from './BackOffice/credit/loan-calculator/loan-calculator.component';
import { GridAppComponent } from './BackOffice/credit/loan-calculator/grid-app/grid-app.component';
import { BarChartComponentComponent } from './BackOffice/credit/loan-calculator/bar-chart-component/bar-chart-component.component';
import { HomeComponent } from './BackOffice/credit/loan-calculator/home/home.component';
import { DashboardComponent } from './BackOffice/credit/loan-calculator/home/dashboard/dashboard.component';
import { InputComponent } from './BackOffice/credit/loan-calculator/home/input/input.component';
import { StatementComponent } from './BackOffice/credit/loan-calculator/statement/statement.component';
import { BarChartComponent } from './BackOffice/credit/loan-calculator/bar-chart/bar-chart.component';
import { DataService } from './BackOffice/credit/loan-calculator/data-service';
import { MatIconModule } from '@angular/material/icon';
import { NgxBootstrapIconsModule, alarm, alarmFill, alignBottom } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DOCUMENT, DatePipe, NgStyle } from '@angular/common';
import { Component, DestroyRef, effect, inject, OnInit, Renderer2, signal, WritableSignal } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import {
  AvatarComponent,
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardFooterComponent,
  CardHeaderComponent,
  ColComponent,
  FormCheckLabelDirective,
  GridModule,
  GutterDirective,
  ProgressBarDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,
  TextColorDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { FinancingRequestComponent } from './BackOffice/financing-request/financing-request.component';
import { OfferComponent } from './FrontOffice/offer/offer.component';
import { AllTemplateFrontComponent } from './FrontOffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { LoginfrontComponent } from './FrontOffice/loginfront/loginfront.component';
import { SendresetcodeComponent } from './BackOffice/sendresetcode/sendresetcode.component';
import { ResetPasswordComponent } from './BackOffice/reset-password/reset-password.component';
import { SendresetcodefrontComponent } from './FrontOffice/sendresetcodefront/sendresetcodefront.component';
import { ResetpasswordfrontComponent } from './FrontOffice/resetpasswordfront/resetpasswordfront.component';
import { HomefrontComponent } from './FrontOffice/homefront/homefront.component';
import { AllhomefrontComponent } from './FrontOffice/allhomefront/allhomefront.component';
import { HeaderhomeFrontComponent } from './FrontOffice/headerhome-front/headerhome-front.component';
import { ClaimsallfrontComponent } from './FrontOffice/claimsallfront/claimsallfront.component';
import { ClaimslistfrontComponent } from './FrontOffice/claimslistfront/claimslistfront.component';
import { ClaimsAllComponent } from './BackOffice/claims-all/claims-all.component';
import { ClaimDetailsComponent } from './BackOffice/claim-details/claim-details.component';
import { YourOpenClaimsComponent } from './BackOffice/your-open-claims/your-open-claims.component';
import { HomebackComponent } from './BackOffice/homeback/homeback.component';
import { OfferDetailsComponent } from './FrontOffice/offer-details/offer-details.component';
import { FiancingFrontComponent } from './FrontOffice/fiancing-front/fiancing-front.component';
import { DevisExcelComponent } from './FrontOffice/devis-excel/devis-excel.component';
import { MyFinancingsComponent } from './FrontOffice/my-financings/my-financings.component';
import { StripeComponent } from './FrontOffice/stripe/stripe.component';
import { AllofferComponent } from './BackOffice/alloffer/alloffer.component';
import { PerformanceLineChartComponent } from './BackOffice/performance-line-chart/performance-line-chart.component';

import { OfferPopUpComponent } from './BackOffice/offer-pop-up/offer-pop-up.component';
import { OfferService } from './services/offer.service';
import { MatDialogModule } from '@angular/material/dialog';


import { BarChartTopUrlsComponent } from './BackOffice/bar-chart-top-urls/bar-chart-top-urls.component';
import { AddclaimComponent } from './FrontOffice/addclaim/addclaim.component';
import { UserdetailsComponent } from './BackOffice/userdetails/userdetails.component';
import { UserListComponent } from './BackOffice/user-list/user-list.component';
import { UserDetailDialogComponent } from './BackOffice/user-detail-dialog/user-detail-dialog.component';
import { UserBannedListComponent } from './BackOffice/user-banned-list/user-banned-list.component';
import { ClaimsListComponent } from './BackOffice/claims-list/claims-list.component';


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
    MicrocreditsComponent,
    MicroCreditListComponent,
    MicroCreditDetailsComponent,
    MyMicroCreditsComponent,
    EditCreditStatusDialogComponentcomponent,
    LoanCalculatorComponent,
    GridAppComponent,
    BarChartComponentComponent,
    HomeComponent,
    DashboardComponent,
    InputComponent,
    StatementComponent,
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
    ClaimsListComponent,


    PerformanceLineChartComponent,
    
    
    
    
    

    ClaimsAllComponent,
    ClaimDetailsComponent,
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

    BarChartTopUrlsComponent,
    AddclaimComponent,
    UserdetailsComponent,
    UserListComponent,
    UserDetailDialogComponent,
    UserBannedListComponent
    
    
    


   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    MatCardModule,
    DropzoneMaterialModule,
    MatFormFieldModule,
    NgxDropzoneModule,
    MessagesModule,
    TreeGridModule,
    DatePickerModule,
    ChartModule,
    AccumulationChartModule,
    RadioButtonModule,
    NumericTextBoxModule,
    SliderModule,
    MatIconModule,
    BrowserAnimationsModule,
    TextColorDirective,
    CardComponent,
    CardBodyComponent,
    RowComponent,
    ColComponent,
    ButtonDirective,
    IconDirective,
    ReactiveFormsModule,
    ButtonGroupComponent,
    FormCheckLabelDirective,
    ChartjsComponent, NgStyle,
    CardFooterComponent,
    GutterDirective,
    ProgressBarDirective,
    ProgressComponent,
    CardHeaderComponent,
    TableDirective,
    AvatarComponent,


    

    NgbModule,
    MatDialogModule,
    GridModule,
    
    
    
    
    

  ],
  providers: [
    OfferService, DataService,
    provideAnimationsAsync(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DatePipe,
    NgbModule,
    MatDialogModule,
    GridModule,
    RadioButtonModule,

    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
