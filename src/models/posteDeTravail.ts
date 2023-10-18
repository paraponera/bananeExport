import { CoutEquipement } from "./equipements/coutEquipement";

export class PosteDeTravail {
 
    private equipement: CoutEquipement[] = [];
    private equipmentsMap: Map<string, number>;

    constructor() {
        this.equipmentsMap = new Map<string, number>();
      }

    addEquipment(equipement: CoutEquipement): void {
        this.equipement.push(equipement);
        if (this.equipmentsMap.has(equipement.getClassName())) {
            let count = this.equipmentsMap.get(equipement.getClassName()) ?? 0;
            this.equipmentsMap.set(equipement.getClassName(), count + 1);
        } else {
            this.equipmentsMap.set(equipement.getClassName(), 1);
        }  
    }

    getCoutTotal(): number {
        let coutTotal = 0;
        for (const equipement of this.equipement) {
            coutTotal += equipement.getCout();
        }
        return coutTotal;
    }

    equipementAjoute(equipement: string): boolean {
        return this.equipmentsMap.has(equipement);
    }

    equipementQte(equipement: string): number {
        return this.equipmentsMap.get(equipement) ?? 0;
    }

    getEquipementsToString(): string {
        let result = "{\n";
        for (const [key, value] of this.equipmentsMap) {
          result += `  "${key}": ${value},\n`;
        }
        result += "}";
        return result;
    }
}