import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdocumentComponent } from './ajoutdocument.component';

describe('AjoutdocumentComponent', () => {
  let component: AjoutdocumentComponent;
  let fixture: ComponentFixture<AjoutdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutdocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
