import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistqueTicketComponent } from './statistque-ticket.component';

describe('StatistqueTicketComponent', () => {
  let component: StatistqueTicketComponent;
  let fixture: ComponentFixture<StatistqueTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistqueTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistqueTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
