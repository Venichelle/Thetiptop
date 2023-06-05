import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CgiComponent } from './cgi.component';

describe('CgiComponent', () => {
  let component: CgiComponent;
  let fixture: ComponentFixture<CgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
