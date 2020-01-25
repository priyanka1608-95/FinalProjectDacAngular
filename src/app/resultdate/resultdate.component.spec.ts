import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultdateComponent } from './resultdate.component';

describe('ResultdateComponent', () => {
  let component: ResultdateComponent;
  let fixture: ComponentFixture<ResultdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
