import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/models/commercial';
import { Developpeur } from 'src/models/developpeur';
import { Employee } from 'src/models/employe';
import { Laptop } from 'src/models/equipements/laptop';
import { MicroCasque } from 'src/models/equipements/micro-casque';
import { Moniteur } from 'src/models/equipements/moniteur';
import { PcAvecEcran } from 'src/models/equipements/pc-avec-ecran';
import { Smartphone } from 'src/models/equipements/smartphone';
import { TelFixe } from 'src/models/equipements/tel-fixe';
import { PosteDeTravail } from 'src/models/posteDeTravail';
import { Trader } from 'src/models/trader';
import { EmployeeService } from 'src/services/employe-service';
import { prixEquipements } from 'src/static-data/static-data';

@Component({
  selector: 'app-ajout-employee',
  templateUrl: './ajout-employee.component.html',
  styleUrls: ['./ajout-employee.component.scss']
})
export class AjoutEmployeeComponent {

  title = 'banane-export';
  nom: string = '';
  prenom: string = '';
  date: string = '';
  posteSelectionne = '';
  nouvelArrivant: any;
  nouveauPosteTravail: any;
  budget = 0;

  laptop = prixEquipements.laptop;
  pcAvecEcran = prixEquipements.pcAvecEcran;
  stationAccueil = prixEquipements.stationAccueil;
  moniteurSupp = prixEquipements.moniteurSupp;
  smartphone = prixEquipements.smartphone;
  telFixe = prixEquipements.telFixe;
  microCasque = prixEquipements.microCasque;

  msgAlert: string = '';
  msgConfirmation: string= '';
  validerdisabled = false;

  listeEmployes: Employee[] = [];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  selectPoste(poste: string) {
    this.posteSelectionne = poste;
    this.nouveauPosteTravail = new PosteDeTravail();
    switch (poste) {
      case 'D':
        this.nouvelArrivant = new Developpeur(Math.random(), this.nom, this.prenom);
        this.budget = this.nouvelArrivant.budget;
        this.nouveauPosteTravail = this.nouvelArrivant.posteDeTravail;
        break;
      case 'T':
        this.nouvelArrivant = new Trader(Math.random(), this.nom, this.prenom);
        this.budget = this.nouvelArrivant.budget;
        this.nouveauPosteTravail = this.nouvelArrivant.posteDeTravail;
        break;
      case 'C':
        this.nouvelArrivant = new Commercial(Math.random(), this.nom, this.prenom);
        this.budget = this.nouvelArrivant.budget;
        this.nouveauPosteTravail = this.nouvelArrivant.posteDeTravail;
        break;
      default:
        throw new Error("Out of scope!");
    }
  }

  ajoutLaptop() {
    if (!this.nouveauPosteTravail.equipementAjoute('Laptop')) {
      if (this.achatPossible(prixEquipements.laptop)) {
        let laptop = new Laptop(prixEquipements.laptop);
        this.nouveauPosteTravail.addEquipment(laptop);
      } else {
        this.afficherMsgAlerte('Budget insuffisant!!');
      }
    } else {
      this.afficherMsgAlerte('Un seul laptop par employé!!');
    }
  }

  ajoutPcAvecEcran() {
    if (!this.nouveauPosteTravail.equipementAjoute('PcAvecEcran')) {
      if (this.achatPossible(prixEquipements.pcAvecEcran)) {
        let pcFixe = new PcAvecEcran(prixEquipements.pcAvecEcran);
        this.nouveauPosteTravail.addEquipment(pcFixe);
      } else {
        this.afficherMsgAlerte('Budget insuffisant!!');
      }
    } else {
      this.afficherMsgAlerte('Un seul PC par employé!!');
    }
  }

  ajoutMoniteur() {
    if (!this.nouveauPosteTravail.equipementAjoute('Moniteur')
      || (this.nouveauPosteTravail.equipementAjoute('Moniteur') && this.nouveauPosteTravail.equipementQte('Moniteur') < 3)) {
      if (this.achatPossible(prixEquipements.moniteurSupp)) {
        let moniteur = new Moniteur(prixEquipements.moniteurSupp);
        this.nouveauPosteTravail.addEquipment(moniteur);
      } else {
        this.afficherMsgAlerte('Budget insuffisant!!');
      }
    } else {
      this.afficherMsgAlerte('3 écrans maximum par employé!!');
    }
  }

  ajoutSmartphone() {
    if (this.achatPossible(prixEquipements.smartphone)) {
      let smartphone = new Smartphone(prixEquipements.smartphone);
      this.nouveauPosteTravail.addEquipment(smartphone);
    } else {
      this.afficherMsgAlerte('Budget insuffisant!!');
    }
  }

  ajoutTelFixe() {
    if (this.achatPossible(prixEquipements.telFixe)) {
      let telFixe = new TelFixe(100);
      this.nouveauPosteTravail.addEquipment(telFixe);
    } else {
      this.afficherMsgAlerte('Budget insuffisant!!');
    }
  }

  ajoutMicroCasque() {
    if (this.achatPossible(prixEquipements.microCasque)) {
      let microCasque = new MicroCasque(prixEquipements.microCasque);
      this.nouveauPosteTravail.addEquipment(microCasque);
    } else {
      this.afficherMsgAlerte('Budget insuffisant!!');
    }
  }

  ajoutStationAccueil() {
    if (!this.nouveauPosteTravail.equipementAjoute('Laptop')) {
      this.afficherMsgAlerte("Un laptop est nécessaire pour commander une station d'accueil!!");
    } else {
      if (this.nouveauPosteTravail.equipementAjoute('Laptop') && this.nouveauPosteTravail.equipementQte('StationAccueil') < 1) {
        if (this.achatPossible(prixEquipements.stationAccueil)) {
          let stationAccueil = new Moniteur(prixEquipements.stationAccueil);
          this.nouveauPosteTravail.addEquipment(stationAccueil);
        } else {
          this.afficherMsgAlerte('Budget insuffisant!!');
        }
      } else {
        this.afficherMsgAlerte("Une seule station d'accueil autorisé par employé!!");
      }
    }
  }

  achatPossible(cout: number) {
    if (this.nouvelArrivant.budget == 0) {
      return true;
    } else {
      return this.budgetRestant() >= cout;
    }
  }

  budgetRestant() {
    return this.budget - this.nouveauPosteTravail.getCoutTotal();
  }

  afficherMsgAlerte(msg: string) {
    this.msgAlert = msg;
    setTimeout(() => {
      this.msgAlert = '';
    }, 5000);
  }

  afficherMsgConfirmation(msg: string) {
    this.msgConfirmation = msg;
    setTimeout(() => {
      this.msgConfirmation = '';
      this.resetFormulaire();
      this.validerdisabled = false;
    }, 5000);
  }

  enregistrerEmployee() {
    this.validerdisabled = true;
    this.employeeService.ajoutNouvelEmployee(this.nouvelArrivant);
    this.afficherMsgConfirmation("Le nouvel arrivant a été enregistré avec succès!"); 
  }

  resetFormulaire() {
    this.posteSelectionne = '';
    this.nom = '';
    this.prenom = '';
    this.date = '';
  }

  listeDesEmployes() {
    this.router.navigate(['/employees']);
  }

}

