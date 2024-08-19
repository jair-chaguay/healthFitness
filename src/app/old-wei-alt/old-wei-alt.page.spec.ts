import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OldWeiAltPage } from './old-wei-alt.page';

describe('OldWeiAltPage', () => {
  let component: OldWeiAltPage;
  let fixture: ComponentFixture<OldWeiAltPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OldWeiAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
