import { CoutEquipement } from "./coutEquipement";

export class MicroCasque implements CoutEquipement {
    
    private cost: number;
  
    constructor(cost: number) {
      this.cost = cost;
    }
    
    getCout(): number {
        return this.cost;
    }

    getClassName(): string {
        return 'MicroCasque';
    }
}