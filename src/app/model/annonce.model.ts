  import { AnneeAcademic } from "./anneeacademic.model";
import { Candidature } from "./candidature.model";
import { StatutAnnonce } from "./statut.model";

export class Annonce{

        idannnce!: number;
        titre!: string;
        description!: string;
        datepubli!: Date;
        annedebut?: Date;
        annedefin?: Date;
        candidature?: Candidature[];
        statutdto!: StatutAnnonce;
        version?: number;
        anneeac?: AnneeAcademic;
        iduser?: number;

}
