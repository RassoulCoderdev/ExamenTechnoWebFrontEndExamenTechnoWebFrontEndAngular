import { Component } from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-gestiondossier',
  imports: [],
  templateUrl: './gestiondossier.component.html',
  styleUrl: './gestiondossier.component.css'
})
export class GestiondossierComponent {

  dossiers: any;

  constructor(public authService: AuthService) { }

  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }
}
