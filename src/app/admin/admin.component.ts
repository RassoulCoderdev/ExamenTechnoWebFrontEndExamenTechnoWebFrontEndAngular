import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjoutanonceComponent } from "./ajoutanonce/ajoutanonce.component";
import { AnnocesService } from '../services/annoces.service';
import { Annonce } from '../model/annonce.model';
import { AuthService } from '../auth/service/auth.service';
import { AnnonceComponent } from '../annonce/annonce.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  imports: [AjoutanonceComponent,
    CommonModule,AnnonceComponent
  ]
})
export class AdminComponent implements OnInit{
  annonces!: Annonce[]; // Tableau pour stocker les annonces

  constructor(private annonceService: AnnocesService,public authService: AuthService) { }


  ngOnInit(): void {
    this.getAnnonces();

  }

  //Methode pour recupérer les annonces
  getAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(annonce=>{

        this.annonces = annonce;

    });
  }

  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }
}
