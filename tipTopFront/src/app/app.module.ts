import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeadearComponent } from './headear/headear.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { StepBarInfoComponent } from './step-bar-info/step-bar-info.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { QuiSommeNousComponent } from './qui-somme-nous/qui-somme-nous.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CguComponent } from './cgu/cgu.component';
import { CgiComponent } from './cgi/cgi.component';
import { MentionLegaleComponent } from './mention-legale/mention-legale.component';
import { AdminComponent } from './role/admin/admin.component';
import { AddTicketComponent } from './role/functionality/add-ticket/add-ticket.component';
import { DetailsLotsComponent } from './role/functionality/details-lots/details-lots.component';
import { GestionRoleComponent } from './role/functionality/gestion-role/gestion-role.component';
import { GestionUtilisateurComponent } from './role/functionality/gestion-utilisateur/gestion-utilisateur.component';
import { StatistqueTicketComponent } from './role/functionality/statistque-ticket/statistque-ticket.component';
import { DecimalPipe } from '@angular/common';
import { ClientComponent } from './role/client/client.component';
import { AvisComponent } from './avis/avis.component';
import { EmployeComponent } from './role/employe/employe.component';
import { HuissierComponent } from './role/huissier/huissier.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadearComponent,
    FooterComponent,
    LoginComponent,
    ProductsComponent,
    StepBarInfoComponent,
    HeaderHomeComponent,
    HomeComponent,
    SignUpComponent,
    QuiSommeNousComponent,
    ContactUsComponent,
    CguComponent,
    CgiComponent,
    MentionLegaleComponent,
    AdminComponent,
    AddTicketComponent,
    DetailsLotsComponent,
    GestionRoleComponent,
    GestionUtilisateurComponent,
    LoginComponent,
    StatistqueTicketComponent,
    ClientComponent,
    AvisComponent,
    EmployeComponent,
    HuissierComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
