import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessappComponent } from './bussinessapp.component';

describe('BussinessappComponent', () => {
  let component: BussinessappComponent;
  let fixture: ComponentFixture<BussinessappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BussinessappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinessappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
