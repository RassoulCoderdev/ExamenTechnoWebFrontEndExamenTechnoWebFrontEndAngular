import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidatsService } from '../../services/candidats.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { Annonce } from '../../model/annonce.model';


@Component({
  selector: 'app-postulcandiat',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './postulcandiat.component.html',
  styleUrl: './postulcandiat.component.css'
})
export class PostulcandiatComponent {

  id!: number;
  anoonce!:Annonce[];
  candidateForm: FormGroup;

  constructor(private fb: FormBuilder, private candidatService: CandidatsService, private route: ActivatedRoute) {
    this.candidateForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      poste: ['', Validators.required],
      adresse: ['', Validators.required],
    // email: ['', [Validators.required, Validators.email]],
      annee: ['', Validators.required],
      //situation: ['', Validators.required],
      photo: [null, Validators.required],
      cv: [null, Validators.required],
      motivation: ['', [Validators.required]],
      diplomes: ['', Validators.required]
    });
  }

  NgOnInit() {
   //recupérer l'id transmit dans l'url
   this.route.paramMap.subscribe(params => {
     this.id = parseInt(params.get('id') || '0', 10);
   });
   
  }

  // Getter pour accéder aux champs du formulaire
  get f() {
    return this.candidateForm.controls;
  }

  // Soumission du formulaire
  onSubmit() {
    if (this.candidateForm.invalid) {
      return; // Arrête l'envoi si le formulaire est invalide
    }
    console.log(this.candidateForm.value);
    // Traitement ou envoi des données
    this.candidatService.postulerCandidat(this.id, this.candidateForm.value).subscribe({
      next: (response: any) => {
        console.log(response);
        // Réinitialisation du formulaire
        this.candidateForm.reset();
        // Afficher un message de confirmation
        Swal.fire({
          icon:'success',
          title: 'Postulation réussie!',
          text: 'Votre candidature a bien été envoyée.'
        });
      },
      error: (error: any) => {
        console.error(error);
        // Afficher un message d'erreur
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur s\'est produite lors de la soumission de votre candidature.'
        });
      }
    });
  }
}
