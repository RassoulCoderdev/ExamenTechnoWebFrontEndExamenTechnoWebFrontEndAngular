import { Routes } from '@angular/router';
import { InscriptionComponent } from './auth/component/inscription/inscription.component';
import { LoginComponent } from './auth/component/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AjoutanonceComponent } from './admin/ajoutanonce/ajoutanonce.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CandidatComponent } from './candidat/candidat.component';
import { PostulcandiatComponent } from './candidat/postulcandiat/postulcandiat.component';
import { ModifiecompteComponent } from './candidat/modifiecompte/modifiecompte.component';
import { MescandidaturesComponent } from './candidat/mescandidatures/mescandidatures.component';
import { ListescandidatsComponent } from './admin/listescandidats/listescandidats.component';
import { GestiondossierComponent } from './admin/gestiondossier/gestiondossier.component';
import { CompteadminComponent } from './admin/compteadmin/compteadmin.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { CandidatureComponent } from './candidature/candidature.component';
import { AjoutdocumentComponent } from './ajoutdocument/ajoutdocument.component';
import { AffichagedocComponent } from './affichagedoc/affichagedoc.component';
import {UsersComponent} from "./etudiant/users.component";
import {InscriptionAdminComponent} from "./auth/component/inscriptionadmin/inscriptionadmin.component";
import {ListeAdminComponent} from "./listeadmin/listeadmin.component";


export const routes: Routes = [
  { path: 'accueil', component: LoginComponent }, //
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path:'auth/login',component: LoginComponent},
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
   //{ path: '**', redirectTo: 'auth/login' },
    { path: 'auth/inscription', component: InscriptionComponent },
    { path: 'auth/inscription', redirectTo: 'auth/inscription' },
    {path:'admin',component: AdminComponent},
    { path: '', redirectTo: 'admin', pathMatch: 'full' },
    { path: 'ajoutanonce', component: AjoutanonceComponent }, //
    { path: '', redirectTo: 'ajoutanonce', pathMatch: 'full' },
    { path: 'candidat', component: MescandidaturesComponent },
    { path: 'postulcandidat/:id', component: CandidatureComponent },
    { path: 'ajoutdoc/:id', component: AjoutdocumentComponent },
    { path: 'modifiecompte', component: ModifiecompteComponent},
    { path: 'mescandidatures',component: MescandidaturesComponent},
    { path: 'verifEmail', component: VerifEmailComponent },
    { path:  'listescandidat', component: ListescandidatsComponent},
    { path: 'gestiondossier', component: GestiondossierComponent},
    { path: 'compteadmin', component: CompteadminComponent},
    { path: 'annonce', component: AnnonceComponent},
    { path: 'afficheannonce', component: AffichagedocComponent},
  { path: 'auth/inscriptionadmin', component: InscriptionAdminComponent },
  { path: 'auth/inscriptionadmin', redirectTo: 'auth/inscriptionadmin' },
  { path: 'user', component: UsersComponent},
  { path: 'listeadmin', component: ListeAdminComponent },






];
