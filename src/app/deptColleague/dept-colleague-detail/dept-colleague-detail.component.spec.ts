import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptColleagueDetailComponent } from './dept-colleague-detail.component';

describe('DeptColleagueDetailComponent', () => {
  let component: DeptColleagueDetailComponent;
  let fixture: ComponentFixture<DeptColleagueDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptColleagueDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptColleagueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
