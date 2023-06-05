import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HuissierComponent } from './huissier.component';

describe('HuissierComponent', () => {
  let component: HuissierComponent;
  let fixture: ComponentFixture<HuissierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HuissierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HuissierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
