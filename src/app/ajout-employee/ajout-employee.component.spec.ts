import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AjoutEmployeeComponent } from './ajout-employee.component';
import { EmployeeService } from 'src/services/employe-service';

describe('AjoutEmployeeComponent', () => {
  let component: AjoutEmployeeComponent;
  let fixture: ComponentFixture<AjoutEmployeeComponent>;
  let router: Router;
  let employeeService: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEmployeeComponent],
      providers: [
        { provide: Router, useValue: { navigate: () => {} } },
        EmployeeService,
      ],
    });
    fixture = TestBed.createComponent(AjoutEmployeeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set posteSelectionne and budget when selectPoste is called', () => {
    component.selectPoste('D');
    expect(component.posteSelectionne).toBe('D');
    expect(component.budget).toBe(3000);
  });

  it('should add laptop to nouveauPosteTravail when ajoutLaptop is called', () => {
    component.selectPoste('D');
    component.ajoutLaptop();
    expect(component.nouveauPosteTravail.equipementAjoute('Laptop')).toBe(true);
  });

  it('should navigate to employees when listeDesEmployes is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.listeDesEmployes();
    expect(navigateSpy).toHaveBeenCalledWith(['/employees']);
  });

  it('should call employeeService.ajoutNouvelEmployee when enregistrerEmployee is called', () => {
    const ajoutNouvelEmployeeSpy = spyOn(employeeService, 'ajoutNouvelEmployee');
    component.enregistrerEmployee();
    expect(ajoutNouvelEmployeeSpy).toHaveBeenCalledWith(component.nouvelArrivant);
  });

  it('should add Laptop equipment when ajoutLaptop is called if budget allows', () => {
    component.selectPoste('D');
    const budgetBefore = component.budgetRestant();
    component.ajoutLaptop();
    const budgetAfter = component.budgetRestant();
    const equipment = component.nouveauPosteTravail.equipementAjoute('Laptop');
  
    expect(equipment).toBeTruthy();
    expect(budgetBefore).toBeGreaterThan(budgetAfter);
  });
  
  it('should not add Laptop equipment when ajoutLaptop is called if budget is insufficient', () => {
    component.selectPoste('D');
    component.budget = 0;
    component.ajoutLaptop();
    const equipment = component.nouveauPosteTravail.equipementAjoute('Laptop');
  
    expect(equipment).toBeFalsy();
    expect(component.msgAlert).toBe('Budget insuffisant!!');
  });
  
  it('should not add more than one Laptop equipment when ajoutLaptop is called', () => {
    component.selectPoste('D');
    component.ajoutLaptop();
    component.ajoutLaptop();
    const equipmentCount = component.nouveauPosteTravail.equipementQte('Laptop');
  
    expect(equipmentCount).toBe(1);
    expect(component.msgAlert).toBe('Un seul laptop par employé!!');
  });
  
  it('should add Moniteur equipment when ajoutMoniteur is called if quantity allows', () => {
    component.selectPoste('D');
    const quantityBefore = component.nouveauPosteTravail.equipementQte('Moniteur');
    component.ajoutMoniteur();
    const quantityAfter = component.nouveauPosteTravail.equipementQte('Moniteur');
    const equipment = component.nouveauPosteTravail.equipementAjoute('Moniteur');
  
    expect(equipment).toBeTruthy();
    expect(quantityAfter).toBe(quantityBefore + 1);
  });
  
  it('should not add Moniteur equipment when ajoutMoniteur is called if budget is insufficient', () => {
    component.selectPoste('D');
    component.budget = 0;
    component.ajoutMoniteur();
    const equipment = component.nouveauPosteTravail.equipementAjoute('Moniteur');
  
    expect(equipment).toBeFalsy();
    expect(component.msgAlert).toBe('Budget insuffisant!!');
  });
  
  it('should not add more than three Moniteur equipment when ajoutMoniteur is called', () => {
    component.selectPoste('D');
    for (let i = 0; i < 4; i++) {
      component.ajoutMoniteur();
    }
    const equipmentCount = component.nouveauPosteTravail.equipementQte('Moniteur');
  
    expect(equipmentCount).toBe(3);
    expect(component.msgAlert).toBe('3 écrans maximum par employé!!');
  });

});