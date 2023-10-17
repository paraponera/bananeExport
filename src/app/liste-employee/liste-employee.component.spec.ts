import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmployeeComponent } from './liste-employee.component';

describe('ListeEmployeeComponent', () => {
  let component: ListeEmployeeComponent;
  let fixture: ComponentFixture<ListeEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeEmployeeComponent]
    });
    fixture = TestBed.createComponent(ListeEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
