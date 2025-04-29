import { Component } from '@angular/core';
import { AnnonceComponent } from '../../annonce/annonce.component';
import { Annonce } from '../../model/annonce.model';
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-mescandidatures',
  imports: [AnnonceComponent],
  templateUrl: './mescandidatures.component.html',
  styleUrl: './mescandidatures.component.css'
})
export class MescandidaturesComponent {
annonce!:Annonce[];
constructor(private authService:AuthService) {}



  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }
}
