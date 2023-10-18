import { Employee } from "./employe";
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
        return 'Développeur';
    }
}