import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnocesService } from '../services/annoces.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-candidat',
  imports: [CommonModule,  RouterModule,],
  templateUrl: './candidat.component.html',
  styleUrl: './candidat.component.css'
})
export class CandidatComponent {

  campaigns: any ;

constructor(private annoceService: AnnocesService) {}

  //methode pour recuperer les annoces
  getAnnoces(): any {
    this.annoceService.getAnnonces().subscribe({
      next: (annonces) => {
        this.campaigns = annonces;
      }
    });
  }

}
