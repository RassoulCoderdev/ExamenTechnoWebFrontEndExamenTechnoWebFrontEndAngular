import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// admindashboard
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    imports: [ ReactiveFormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'


})
export class LoginComponent {

    erreur=0;
    message : string = "login ou mot de passe erronés..";
    type: string = "password"; "username": string;
    isText: boolean = false;
    eyeIcon: string ="fa-eye-slash";
    loginForm: FormGroup;
    loginError: string = '';


   constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
        this.loginForm = this.fb.group({
            username: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
   }

   ngOnInit(): void {

   }
   hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon ="fa-eye-slash";
     this.isText ? this.type ="text" : this.type ="password";
   }

   onSubmit() {
    this.authService.login(this.loginForm.value).subscribe({
        next: (data) => {
            let jwToken = data.headers.get('Authorization')!;
            this.authService.saveToken(jwToken);
            if(this.authService.isAdmin()) {
            this.router.navigate(['/admin']); } 
            if(!this.authService.isAdmin()) {
                this.router.navigate(['/candidat']);
            }
          },
          error: (err: any) => {
           this.erreur = 1; 
           if (err.error.errorCause=='disabled')
             this.message="Utilisateur désactivé, Veuillez contacter votre Administrateur";
  
          }
          });
  
    }


}

