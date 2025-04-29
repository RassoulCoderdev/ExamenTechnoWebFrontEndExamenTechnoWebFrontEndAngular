import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnocesService } from '../services/annoces.service';
import { AuthService } from '../auth/service/auth.service';
import {User} from "../model/user.model";
import {Annonce} from "../model/annonce.model";
@Component({
  selector: 'app-users',
imports: [
    CommonModule
  ],
   templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
 users!: User[]; // Tableau pour stocker les annonces
idannonce!: number;
  constructor(private annonceService: AnnocesService,public authService: AuthService) { }


  ngOnInit(): void {
    this.getAnnonces(); // Appel de la méthode pour récupérer les annonces au démarrage

  }

  //Methode pour recupérer les annonces
  getAnnonces(): void {
    this.annonceService.getUsers().subscribe(user=>{
        this.users = user;

    });
  }
  supprimerUser(u: User)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.authService.deleteUser(u.id).subscribe(() => {
        console.log("produit supprimé");
        this.getAnnonces();
      });
  }
}
