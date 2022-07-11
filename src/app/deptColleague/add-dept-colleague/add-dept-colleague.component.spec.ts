import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeptColleagueComponent } from './add-dept-colleague.component';

describe('AddDeptColleagueComponent', () => {
  let component: AddDeptColleagueComponent;
  let fixture: ComponentFixture<AddDeptColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeptColleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDeptColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
