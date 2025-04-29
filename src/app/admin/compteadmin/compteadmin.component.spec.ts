import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteadminComponent } from './compteadmin.component';

describe('CompteadminComponent', () => {
  let component: CompteadminComponent;
  let fixture: ComponentFixture<CompteadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
