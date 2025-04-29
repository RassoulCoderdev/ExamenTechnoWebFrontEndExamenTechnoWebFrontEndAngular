import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnocesService } from '../services/annoces.service';
import { Annonce } from '../model/annonce.model';
import { AuthService } from '../auth/service/auth.service';
import { RouterLink } from '@angular/router';
import {User} from "../model/user.model";
import {Commentaire} from "../model/commentaire .model";
import {CommentaireService} from "../services/commentaire.service";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-annonce',
  imports: [
    CommonModule, FormsModule
  ],
   templateUrl: './annonce.component.html',
  styleUrl: './annonce.component.css'
})
export class AnnonceComponent {
 annonces!: Annonce[]; // Tableau pour stocker les annonces
idannonce!: number;
  commentairesMap= new Map<number,Commentaire[]>();
  nouveauCommentaire: {[key:number]:string}={};
  // Map des commentaires affichés par annonce
  commentairesAffiches: { [key: number]: boolean } = {};

  constructor(private annonceService: AnnocesService,public authService: AuthService,private commentaireService:CommentaireService) { }


  ngOnInit(): void {
    this.getAnnonces(); // Appel de la méthode pour récupérer les annonces au démarrage

  }
  afficherCommentaires(idAnnonce: number): void {
    this.commentairesAffiches[idAnnonce] = !this.commentairesAffiches[idAnnonce];

    // Si on veut charger les commentaires seulement au premier affichage :
    if (this.commentairesAffiches[idAnnonce] && !this.commentairesMap.has(idAnnonce)) {
      this.commentaireService.getCommentairesParAnnonce(idAnnonce).subscribe((data) => {
        this.commentairesMap.set(idAnnonce, data);
      });
    }
  }

  ajouterCommentaire(idAnnonce: number): void {
    const contenu = this.nouveauCommentaire[idAnnonce];
    if (!contenu || contenu.trim() === '') return;

    const commentaire = { contenu, annonceId: idAnnonce };

    this.commentaireService.ajouterCommentaire(commentaire).subscribe({
      next: (comAjoute) => {
        // Si la map n’existe pas encore pour cette annonce, on la crée
        if (!this.commentairesMap.has(idAnnonce)) {
          this.commentairesMap.set(idAnnonce, []);
        }

        // Ajout du commentaire directement à la map pour affichage instantané
        this.commentairesMap.get(idAnnonce)!.push(comAjoute);

        // Réinitialiser la zone de texte
        this.nouveauCommentaire[idAnnonce] = '';
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout du commentaire :", err);
      }
    });
  }


  //Methode pour recupérer les annonces
  getAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(annonce=>{
        this.annonces = annonce;

    });
  }
  supprimerAnnonce(u: Annonce)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.annonceService.deleteAnnoce(u.idannnce).subscribe(() => {
        console.log("produit supprimé");
        this.getAnnonces();
      });
  }
}
