import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarNoticiaComponent } from './cadastrar-noticia.component';

describe('CadastrarNoticiaComponent', () => {
  let component: CadastrarNoticiaComponent;
  let fixture: ComponentFixture<CadastrarNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarNoticiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
