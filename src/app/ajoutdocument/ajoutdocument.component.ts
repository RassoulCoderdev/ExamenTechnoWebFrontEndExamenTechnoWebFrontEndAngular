import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocumentService } from '../services/document.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ajoutdocument',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ajoutdocument.component.html',
  styleUrl: './ajoutdocument.component.css'
})
export class AjoutdocumentComponent implements OnInit{
  documentForm: FormGroup;
  selectedFile!: File;
  idcandidature!:number;

  constructor(private fb: FormBuilder, private documentService: DocumentService, private route: ActivatedRoute) {
    this.documentForm = this.fb.group({ 
      motivation: ['', Validators.required],
      cv: ['', Validators.required]

    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idcandidature = parseInt(params.get('id') || '0', 10);
      console.log('ID de l\'annonce récupéré:', this.idcandidature);
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.documentForm.invalid || !this.selectedFile) return;
  
    this.documentService.uploadDocument(this.selectedFile, this.idcandidature).subscribe({
      next: (response) => {
        console.log('Document ajouté avec succès', response);
      },
      error: (error) => {
        console.error('Erreur lors de l’ajout du document', error);
        // Vérifiez la réponse brute pour comprendre ce qui a été renvoyé
        console.error('Réponse brute:', error.error);
      },
      complete: () => {
        console.log('Téléchargement terminé');
      }
    });
  }
  
  
}
