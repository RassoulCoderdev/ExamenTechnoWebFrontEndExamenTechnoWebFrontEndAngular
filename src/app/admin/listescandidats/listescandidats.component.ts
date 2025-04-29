import { Component } from '@angular/core';
import { CandidatsService } from '../../services/candidats.service';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "../../etudiant/users.component";
import {AuthService} from "../../auth/service/auth.service";

@Component({
  selector: 'app-listescandidats',
  imports: [CommonModule, UsersComponent,],
  templateUrl: './listescandidats.component.html',
  styleUrl: './listescandidats.component.css'
})
export class ListescandidatsComponent {
  candidats: any[] = []; // Tableau pour stocker les candidats

  constructor(private candidatService: CandidatsService,public authService:AuthService ) { }

  ngOnInit(): void {
    //methode pour listes les candidats

  }

  //methode pour listes les candidats
  listescandidats(): void {
    // TODO: Appeler une fonction pour lister les candidats
    this.candidatService.getCandidats().subscribe({
      next: (response: any) => {
        this.candidats = response.data;
      }
    });
  }
  onLogout(){
    console.log("logout-------1");
    this.authService.logout();
  }

}
