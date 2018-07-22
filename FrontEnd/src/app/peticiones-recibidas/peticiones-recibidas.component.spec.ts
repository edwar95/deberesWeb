import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesRecibidasComponent } from './peticiones-recibidas.component';

describe('PeticionesRecibidasComponent', () => {
  let component: PeticionesRecibidasComponent;
  let fixture: ComponentFixture<PeticionesRecibidasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionesRecibidasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionesRecibidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
