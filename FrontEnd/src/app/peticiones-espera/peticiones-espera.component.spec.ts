import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesEsperaComponent } from './peticiones-espera.component';

describe('PeticionesEsperaComponent', () => {
  let component: PeticionesEsperaComponent;
  let fixture: ComponentFixture<PeticionesEsperaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesEsperaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
