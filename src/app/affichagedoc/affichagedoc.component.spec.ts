import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichagedocComponent } from './affichagedoc.component';

describe('AffichagedocComponent', () => {
  let component: AffichagedocComponent;
  let fixture: ComponentFixture<AffichagedocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffichagedocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichagedocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
