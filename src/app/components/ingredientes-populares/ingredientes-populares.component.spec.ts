import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesPopularesComponent } from './ingredientes-populares.component';

describe('IngredientesPopularesComponent', () => {
  let component: IngredientesPopularesComponent;
  let fixture: ComponentFixture<IngredientesPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientesPopularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
