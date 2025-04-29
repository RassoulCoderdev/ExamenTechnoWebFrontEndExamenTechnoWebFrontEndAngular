import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ListeAdminComponent} from "./listeadmin.component";


describe('ListeAdminComponent', () => {
  let component: ListeAdminComponent;
  let fixture: ComponentFixture<ListeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
