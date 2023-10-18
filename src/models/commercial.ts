import { Employee } from "./employe";
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

    getNom() {
        return this.nom;
    }

    getPrenom() {
        return this.prenom;
    }

    getBudget() {
        return this.budget;
    }

    getPosteDeTravail(): PosteDeTravail {
        return this.posteDeTravail;
    }

    getPoste(): string {
        return 'Commercial';
    }
}