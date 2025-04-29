import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulcandiatComponent } from './postulcandiat.component';

describe('PostulcandiatComponent', () => {
  let component: PostulcandiatComponent;
  let fixture: ComponentFixture<PostulcandiatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostulcandiatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostulcandiatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
