import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInstaSnapComponent } from './new-insta-snap.component';

describe('NewInstaSnapComponent', () => {
  let component: NewInstaSnapComponent;
  let fixture: ComponentFixture<NewInstaSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInstaSnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInstaSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
