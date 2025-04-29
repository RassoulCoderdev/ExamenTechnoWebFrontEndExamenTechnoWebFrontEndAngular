import {Component, Output,EventEmitter} from '@angular/core';
import { AnnocesService } from '../../services/annoces.service';
import { Annonce } from '../../model/annonce.model';
import { StatutAnnonce } from '../../model/statut.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ajoutanonce',
  templateUrl: './ajoutanonce.component.html',
  imports: [CommonModule,FormsModule],
  styleUrls: ['./ajoutanonce.component.css'],
})
export class AjoutanonceComponent {
  annonces: Annonce = new Annonce(); // Initialisation de l'annonce
  statutOptions: string[] = Object.values(StatutAnnonce); // Récupération des valeurs de l'énumération
  @Output() annonceAjoutee = new EventEmitter<void>();
  constructor(private annonceService: AnnocesService, private router: Router) {}

  addAnnonce() {
    this.annonceService.addAnnonce(this.annonces).subscribe({
      next: (prod) => {
        console.log('Annonce ajoutée:', prod);
        Swal.fire('Succès', 'Annonce ajoutée avec succès', 'success');
      //  this.router.navigate(['Admin']);
        this.annonceAjoutee.emit(); // 👈 notifie le parent
        this.annonces = new Annonce();
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout:', err);
        Swal.fire('Erreur', 'Une erreur est survenue', 'error');
      }
    });
  }
}
