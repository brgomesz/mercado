import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosInternosComponent } from './registros-internos.component';

describe('RegistrosInternosComponent', () => {
  let component: RegistrosInternosComponent;
  let fixture: ComponentFixture<RegistrosInternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrosInternosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrosInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
