import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProdutosComponent } from './registro-produtos.component';

describe('RegistroProdutosComponent', () => {
  let component: RegistroProdutosComponent;
  let fixture: ComponentFixture<RegistroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
