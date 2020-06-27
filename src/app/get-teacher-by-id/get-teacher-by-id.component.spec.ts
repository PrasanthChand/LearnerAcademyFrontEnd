import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTeacherByIdComponent } from './get-teacher-by-id.component';

describe('GetTeacherByIdComponent', () => {
  let component: GetTeacherByIdComponent;
  let fixture: ComponentFixture<GetTeacherByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetTeacherByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTeacherByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
