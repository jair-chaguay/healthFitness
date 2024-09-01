import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjWeekendPage } from './obj-weekend.page';

describe('ObjWeekendPage', () => {
  let component: ObjWeekendPage;
  let fixture: ComponentFixture<ObjWeekendPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjWeekendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
