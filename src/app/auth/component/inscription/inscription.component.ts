import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { User } from '../../../model/user.model';
import {AjoutanonceComponent} from "../../../admin/ajoutanonce/ajoutanonce.component";
import {AnnonceComponent} from "../../../annonce/annonce.component";

@Component({
  selector: 'app-inscription',
  imports: [CommonModule, ReactiveFormsModule, ReactiveFormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent {
  inscriptionForm: FormGroup;
  photo: File | null = null;
  base64Image: string | null = null;
  user=new User();
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.inscriptionForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      ine: ['', Validators.required],
      promo: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Vérifier si les mots de passe correspondent
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  // Gestion de la photo
  onPhotoChange(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.base64Image = reader.result as string; // Convertit l'image en Base64
      };
      reader.readAsDataURL(file); // Lire le fichier
    }
  }

  // Soumission du formulaire
  onSubmit(): void {
    console.log(this.base64Image);
    if (this.inscriptionForm.valid) {
      this.inscriptionForm.value.photo = this.base64Image; // Ajouter l'image en Base64 au user

      this.authService.createUser(this.inscriptionForm.value).subscribe({
        next: (response) => {
          Swal.fire({
            title: "Succès!",
            text: "Utilisateur créé avec succès !",
            icon: "success"
          });
          this. authService.setRegistredUser(this.user);
          alert("veillez confirmer votre email");
          this.router.navigate(["/verifEmail"]);
        },
        error: (err) => {
          Swal.fire({
            icon: "error",
            title: "Erreur",
            text: "Erreur lors de la création de l\'utilisateur.",
          });
          console.error(err);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: "Veuillez remplir correctement le formulaire.",
      });
    }
  }
  navigate(){
    this.router.navigate(['/auth/login']);  // redirection vers la page d'inscription
}
 
}
