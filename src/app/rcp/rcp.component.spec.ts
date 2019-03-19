import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RcpComponent } from './rcp.component';

describe('RcpComponent', () => {
  let component: RcpComponent;
  let fixture: ComponentFixture<RcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
