import { CoutEquipement } from "./equipements/coutEquipement";
import { PosteDeTravail } from "./posteDeTravail";

export interface Employee {
    id: number;
    nom: string;
    prenom: string;
    budget: number;
    posteDeTravail: PosteDeTravail;
    reglesAttribution(equipement: CoutEquipement): void;
}