import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListescandidatsComponent } from './listescandidats.component';

describe('ListescandidatsComponent', () => {
  let component: ListescandidatsComponent;
  let fixture: ComponentFixture<ListescandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListescandidatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListescandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
