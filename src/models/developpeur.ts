import { Employee } from "./employe";
import { CoutEquipement } from "./equipements/coutEquipement";
import { PosteDeTravail } from "./posteDeTravail";

export class Developpeur implements Employee {
    
    id: number;
    nom: string;
    prenom: string;
    readonly budget: number;
    posteDeTravail: PosteDeTravail = new PosteDeTravail();
    
    constructor(id: number, nom: string, prenom: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.budget = 3000;
    }
    
    
    reglesAttribution(equipement: CoutEquipement): void {
        throw new Error("Method not implemented.");
    }

}