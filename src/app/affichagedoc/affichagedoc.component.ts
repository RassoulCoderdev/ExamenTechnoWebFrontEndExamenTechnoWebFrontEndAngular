import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { CandidatureService } from '../services/candidature.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Candidature } from '../model/candidature.model';
import { Document } from '../model/document.model';
import { DocumentService } from '../services/document.service';
@Component({
  selector: 'app-affichagedoc',
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './affichagedoc.component.html',
  styleUrl: './affichagedoc.component.css'
})
export class AffichagedocComponent implements OnInit {
  candidatures!: Candidature[];
  document!: Document[];
  newdoc!: Document[];
  constructor(private candidatureService: CandidatureService,private documentService:DocumentService) {}

  ngOnInit(): void {
    this.candidatureService.getAllCandidatures().subscribe(
      (data) => {
        this.candidatures = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des candidatures', error);
      }
    );
   
  }
   
  }

 

 




