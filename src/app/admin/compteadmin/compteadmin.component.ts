import { Component } from '@angular/core';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-compteadmin',
  imports: [],
  templateUrl: './compteadmin.component.html',
  styleUrl: './compteadmin.component.css'
})
export class CompteadminComponent {

  constructor(public authService: AuthService) { }

  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }
}
