import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllTeachersComponent } from './get-all-teachers.component';

describe('GetAllTeachersComponent', () => {
  let component: GetAllTeachersComponent;
  let fixture: ComponentFixture<GetAllTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
