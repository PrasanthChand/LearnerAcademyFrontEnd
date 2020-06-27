import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSubjectByIdComponent } from './get-subject-by-id.component';

describe('GetSubjectByIdComponent', () => {
  let component: GetSubjectByIdComponent;
  let fixture: ComponentFixture<GetSubjectByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetSubjectByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSubjectByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
