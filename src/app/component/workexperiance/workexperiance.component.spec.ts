import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkexperianceComponent } from './workexperiance.component';

describe('WorkexperianceComponent', () => {
  let component: WorkexperianceComponent;
  let fixture: ComponentFixture<WorkexperianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkexperianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkexperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
