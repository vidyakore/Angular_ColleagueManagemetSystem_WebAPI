import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColleagueComponent } from './edit-colleague.component';

describe('EditColleagueComponent', () => {
  let component: EditColleagueComponent;
  let fixture: ComponentFixture<EditColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditColleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
