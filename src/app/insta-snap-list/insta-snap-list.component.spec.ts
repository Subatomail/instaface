import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSnapListComponent } from './insta-snap-list.component';

describe('InstaSnapListComponent', () => {
  let component: InstaSnapListComponent;
  let fixture: ComponentFixture<InstaSnapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaSnapListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaSnapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
