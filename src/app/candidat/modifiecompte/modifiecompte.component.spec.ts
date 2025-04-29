import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiecompteComponent } from './modifiecompte.component';

describe('ModifiecompteComponent', () => {
  let component: ModifiecompteComponent;
  let fixture: ComponentFixture<ModifiecompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifiecompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifiecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
