import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutanonceComponent } from './ajoutanonce.component';

describe('AjoutanonceComponent', () => {
  let component: AjoutanonceComponent;
  let fixture: ComponentFixture<AjoutanonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutanonceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutanonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
