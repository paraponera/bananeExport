import { CoutEquipement } from "./coutEquipement";
import { Moniteur } from "./moniteur";

export class PcAvecEcran implements CoutEquipement {

    private coutPc: number;
    private moniteurs: Moniteur[] = [new Moniteur(0)];

    constructor(coutPc: number, moniteurs?: Moniteur[]) {
        this.coutPc = coutPc;
        if (moniteurs) {
            this.moniteurs.push(...moniteurs);
        } 
    }

    public getCout():number {
        let coutTotal: number = 0;
        this.moniteurs.forEach(moniteur => coutTotal += moniteur.getCout());
        return this.coutPc + coutTotal;
    }

    getClassName(): string {
        return 'PcAvecEcran';
    }
}