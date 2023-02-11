import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSnapComponent } from './insta-snap.component';

describe('InstaSnapComponent', () => {
  let component: InstaSnapComponent;
  let fixture: ComponentFixture<InstaSnapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaSnapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
