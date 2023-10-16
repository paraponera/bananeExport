import { CoutEquipement } from "./coutEquipement";

export class Smartphone implements CoutEquipement {
    
    private cost: number;
  
    constructor(cost: number) {
      this.cost = cost;
    }
    
    getCout(): number {
        return this.cost;
    }

    getClassName(): string {
        return 'Smartphone';
    }
}