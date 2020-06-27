import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllSubjectComponent } from './get-all-subject.component';

describe('GetAllSubjectComponent', () => {
  let component: GetAllSubjectComponent;
  let fixture: ComponentFixture<GetAllSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
