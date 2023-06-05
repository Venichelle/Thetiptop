import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLotsComponent } from './details-lots.component';

describe('DetailsLotsComponent', () => {
  let component: DetailsLotsComponent;
  let fixture: ComponentFixture<DetailsLotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsLotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
