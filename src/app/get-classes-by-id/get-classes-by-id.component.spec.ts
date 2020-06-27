import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetClassesByIdComponent } from './get-classes-by-id.component';

describe('GetClassesByIdComponent', () => {
  let component: GetClassesByIdComponent;
  let fixture: ComponentFixture<GetClassesByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetClassesByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetClassesByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
