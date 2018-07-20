import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionTranasferenciaComponent } from './peticion-tranasferencia.component';

describe('PeticionTranasferenciaComponent', () => {
  let component: PeticionTranasferenciaComponent;
  let fixture: ComponentFixture<PeticionTranasferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeticionTranasferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeticionTranasferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
