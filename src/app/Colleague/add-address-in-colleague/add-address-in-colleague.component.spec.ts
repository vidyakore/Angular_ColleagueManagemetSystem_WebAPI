import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddressInColleagueComponent } from './add-address-in-colleague.component';

describe('AddAddressInColleagueComponent', () => {
  let component: AddAddressInColleagueComponent;
  let fixture: ComponentFixture<AddAddressInColleagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddressInColleagueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAddressInColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
