import { Employee } from "./employe";
import { CoutEquipement } from "./equipements/coutEquipement";
import { Moniteur } from "./equipements/moniteur";
import { PcAvecEcran } from "./equipements/pc-avec-ecran";
import { PosteDeTravail } from "./posteDeTravail";

export class Trader implements Employee {
    id: number;
    nom: string;
    prenom: string;
    budget: number;
    posteDeTravail: PosteDeTravail = new PosteDeTravail();

    constructor(id: number, nom: string, prenom: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.budget = 0;
        const moniteur = new Moniteur(250);
        const pcAvecEcran = new PcAvecEcran(2200);
        this.posteDeTravail.addEquipment(moniteur);
        this.posteDeTravail.addEquipment(moniteur);
        this.posteDeTravail.addEquipment(pcAvecEcran);
    }

    reglesAttribution(equipement: CoutEquipement): void {
        throw new Error("Method not implemented.");
    }

}