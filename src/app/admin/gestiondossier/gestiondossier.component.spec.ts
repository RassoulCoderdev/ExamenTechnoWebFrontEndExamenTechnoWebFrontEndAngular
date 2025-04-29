import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondossierComponent } from './gestiondossier.component';

describe('GestiondossierComponent', () => {
  let component: GestiondossierComponent;
  let fixture: ComponentFixture<GestiondossierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestiondossierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestiondossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
