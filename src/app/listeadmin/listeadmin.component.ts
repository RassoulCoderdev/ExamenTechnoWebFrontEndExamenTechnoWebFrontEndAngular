import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnocesService } from '../services/annoces.service';
import { AuthService } from '../auth/service/auth.service';
import {User} from "../model/user.model";
import {UsersComponent} from "../etudiant/users.component";
@Component({
  selector: 'app-users',
  imports: [
    CommonModule,

  ],
   templateUrl: './listeadmin.component.html',
  styleUrl: './listeadmin.component.css'
})
export class ListeAdminComponent {
 users!: User[]; // Tableau pour stocker les annonces
idannonce!: number;
  constructor(private annonceService: AnnocesService,public authService: AuthService) { }


  ngOnInit(): void {
    this.getAnnonces(); // Appel de la méthode pour récupérer les annonces au démarrage

  }

  //Methode pour recupérer les annonces
  getAnnonces(): void {
    this.annonceService.getAdmins().subscribe(user=>{
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
  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }

}
