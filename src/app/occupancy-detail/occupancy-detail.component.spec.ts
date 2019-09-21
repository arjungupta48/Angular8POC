import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupancyDetailComponent } from './occupancy-detail.component';

describe('OccupancyDetailComponent', () => {
  let component: OccupancyDetailComponent;
  let fixture: ComponentFixture<OccupancyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OccupancyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OccupancyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
