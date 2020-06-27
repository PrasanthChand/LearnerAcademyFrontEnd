import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveClassesComponent } from './remove-classes.component';

describe('RemoveClassesComponent', () => {
  let component: RemoveClassesComponent;
  let fixture: ComponentFixture<RemoveClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
