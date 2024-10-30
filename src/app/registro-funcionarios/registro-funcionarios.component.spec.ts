import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroFuncionariosComponent } from './registro-funcionarios.component';

describe('RegistroFuncionariosComponent', () => {
  let component: RegistroFuncionariosComponent;
  let fixture: ComponentFixture<RegistroFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroFuncionariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
