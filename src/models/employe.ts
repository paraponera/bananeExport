import { CoutEquipement } from "./equipements/coutEquipement";

export interface Employee {
    getNom(): string;
    getPrenom(): string;
    getBudget(): number;
}