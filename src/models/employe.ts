import { PosteDeTravail } from "./posteDeTravail";

export interface Employee {
    getNom(): string;
    getPrenom(): string;
    getBudget(): number;
    getPosteDeTravail(): PosteDeTravail;
    getPoste():string;
}