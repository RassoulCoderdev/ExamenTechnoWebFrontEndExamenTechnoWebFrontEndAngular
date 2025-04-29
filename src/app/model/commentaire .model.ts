export class Commentaire {
  id?: number;
  contenu!: string;
  dateCreation?: Date;
  annonceId!: number;
  userId?: number;
  auteurEmail?: string;
}
