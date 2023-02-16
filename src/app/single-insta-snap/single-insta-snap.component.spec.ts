import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInstaSnapComponent } from './single-insta-snap.component';

describe('SingleInstaSnapComponent', () => {
  let component: SingleInstaSnapComponent;
  let fixture: ComponentFixture<SingleInstaSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleInstaSnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleInstaSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
