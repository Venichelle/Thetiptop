import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CgiComponent } from './cgi/cgi.component';
import { CguComponent } from './cgu/cgu.component';
import { JeuComponent } from './jeu/jeu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MentionLegaleComponent } from './mention-legale/mention-legale.component';
import { QuiSommeNousComponent } from './qui-somme-nous/qui-somme-nous.component';
import { AdminComponent } from './role/admin/admin.component';
import { ClientComponent } from './role/client/client.component';
import { EmployeComponent } from './role/employe/employe.component';
import { HuissierComponent } from './role/huissier/huissier.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuardAdminService } from './_services/auth-guard-admin.service';
import { AuthGuardClientService } from './_services/auth-guard-client.service';
import { AuthGuardEmployeService } from './_services/auth-guard-employe.service';
import { AuthGuardHuissierService } from './_services/auth-guard-huissier.service';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent, data: {
    title: 'Acceuil Thé Tip Top',
    description:'Les thés de qualité de la marque Thé Tip Top',
    ogUrl: '/home'
  } },
  {path:'sign-up', component:SignUpComponent},
  {path:'aboutUs', component:QuiSommeNousComponent},
  {path:'contact', component:ContactUsComponent},
  {path:'jeu', component:JeuComponent},
  {path: 'cgu', component:CguComponent},
  {path:'cgi',component:CgiComponent},
  {path:'mentionLegale', component:MentionLegaleComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdminService] },
  {path:'client', component: ClientComponent, canActivate: [AuthGuardClientService] },
  {path:'employe', component:EmployeComponent, canActivate: [AuthGuardEmployeService]},
  {path:'huissier', component:HuissierComponent, canActivate: [AuthGuardHuissierService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
