import { Component } from '@angular/core';
import { Candidature } from '../model/candidature.model';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CandidatureService } from '../services/candidature.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';
import { AffichagedocComponent } from '../affichagedoc/affichagedoc.component';
@Component({
  selector: 'app-candidature',
  imports: [ReactiveFormsModule,CommonModule,RouterLink,AffichagedocComponent],
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.css'
})
export class CandidatureComponent  implements OnInit {
  candidatureForm: FormGroup;
  selectedFiles: File[] = [];
  candidatures: Candidature[] = [];
  idannonce!:number;
  constructor(private fb: FormBuilder, private candidatureService: CandidatureService,private route: ActivatedRoute
    ,public authService: AuthService
  ) {
    this.candidatureForm = this.fb.group({
      nomcandidature: ['', Validators.required],
    });
  }

  ngOnInit() {
      // Récupérer l'ID de l'annonce depuis l'URL
      this.route.paramMap.subscribe(params => {
        this.idannonce = parseInt(params.get('id') || '0', 10);
        console.log('ID de l\'annonce récupéré:', this.idannonce);
      });
    this.loadCandidatures();
  }

  onFileSelected(event: any) {
    this.selectedFiles = Array.from(event.target.files);
  }

  onSubmit() {
    if (this.candidatureForm.invalid) return;
  
    const candidature: Candidature = {
      ...this.candidatureForm.value,
      idannonce: this.idannonce
    };
  
    console.log("Données envoyées :", candidature); // ✅ Debug
  
    this.candidatureService.createCandidature(candidature).subscribe({
      next: response => {
        console.log('Candidature envoyée avec succès', response);
        this.loadCandidatures();
      },
      error: error => {
        console.error("Erreur lors de l'envoi de la candidature", error);
      }
    });
  }
  
  loadCandidatures() {
    this.candidatureService.getAllCandidatures().subscribe(data => {
      this.candidatures = data;
    });
  }
}
