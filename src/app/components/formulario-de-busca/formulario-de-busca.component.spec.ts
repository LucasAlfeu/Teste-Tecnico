import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDeBuscaComponent } from './formulario-de-busca.component';

describe('FormularioDeBuscaComponent', () => {
  let component: FormularioDeBuscaComponent;
  let fixture: ComponentFixture<FormularioDeBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioDeBuscaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioDeBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
