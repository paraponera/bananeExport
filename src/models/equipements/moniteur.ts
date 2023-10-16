import { CoutEquipement } from "./coutEquipement";

export class Moniteur implements CoutEquipement {

    private coutMoniteur: number;

    constructor(coutMoniteur: number) {
        this.coutMoniteur = coutMoniteur;
      }
    
    getCout(): number {
      return this.coutMoniteur;
    }

    getClassName(): string {
      return 'Moniteur';
    }
}