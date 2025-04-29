import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { CandidatsService } from '../../services/candidats.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifiecompte',
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './modifiecompte.component.html',
  styleUrls: ['./modifiecompte.component.css']
})
export class ModifiecompteComponent implements OnInit {

  modifiecompteForm!: FormGroup;
  hidePassword: boolean = true;
  hideConfirmPassword: boolean = true;

  constructor(private fb: FormBuilder, private candidatService: CandidatsService, private router: Router) { }

  ngOnInit(): void {
    // Création du formulaire avec les validateurs
    this.modifiecompteForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  // Validator personnalisé pour vérifier que password et confirmPassword correspondent
  passwordMatchValidator(form: AbstractControl) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      // Enlever l'erreur mismatch si les mots de passe correspondent
      if (form.get('confirmPassword')?.hasError('mismatch')) {
        form.get('confirmPassword')?.setErrors(null);
      }
    }
    return null;
  }

  // Soumission du formulaire
  onSubmit(): void {
    if (this.modifiecompteForm.valid) {
      console.log("Formulaire valide :", this.modifiecompteForm.value);
      // Vous pouvez ajouter ici la logique de sauvegarde ou de mise à jour
      this.candidatService.updateCandidat(this.modifiecompteForm.value).subscribe({
        next: (response: any) => {
          console.log(response);
          // Réinitialisation du formulaire
          this.router.navigate(['/candidat']); 
          // Afficher un message de confirmation
          Swal.fire({
            icon:'success',
            title: 'Modifications enregistrées!',
            text: 'Vos modifications ont bien été enregistrées.'
          })
        },
        error: (error: any) => {
          console.error(error);
          // Afficher un message d'erreur si une erreur survient
          alert("Une erreur est survenue lors de l'enregistrement des modifications");
        }
      });
    } else {
      console.log("Formulaire invalide");
      this.modifiecompteForm.markAllAsTouched(); // Permet d'afficher les messages d'erreur si besoin
    }
  }

  // Permet de basculer l'affichage du mot de passe
  togglePassword(field: string): void {
    if (field === 'password') {
      this.hidePassword = !this.hidePassword;
    } else if (field === 'confirmPassword') {
      this.hideConfirmPassword = !this.hideConfirmPassword;
    }
  }
}
