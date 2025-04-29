import { Annonce } from "./annonce.model";

export class Candidature {
  idcandidature!: number;
  nomcandidature!: string;
  iddocdto!: number[]; 
  name!: string; 
  url!: string;
  documentdto!: Document[]; 
  iduserdto!: number;
  usernamedto!: string;
  titreannoncedto!: string;
  annonce!: Annonce; 
  idannonce!: number; 
  }