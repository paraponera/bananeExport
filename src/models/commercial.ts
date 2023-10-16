import { Employee } from "./employe";
import { CoutEquipement } from "./equipements/coutEquipement";
import { Laptop } from "./equipements/laptop";
import { PcAvecEcran } from "./equipements/pc-avec-ecran";
import { Smartphone } from "./equipements/smartphone";
import { PosteDeTravail } from "./posteDeTravail";

export class Commercial implements Employee {
    
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
        const smartphone = new Smartphone(600);
        this.posteDeTravail.addEquipment(smartphone);
    }
    
    reglesAttribution(equipement: CoutEquipement): void {
        if(this.budget > this.posteDeTravail.getCoutTotal()) {
            if (equipement instanceof Laptop) {
                console.log("Laptop");
            } else {
                console.log("out of scope");
            }
        }
        console.log("poste de travail => ",this.posteDeTravail);
    }

}