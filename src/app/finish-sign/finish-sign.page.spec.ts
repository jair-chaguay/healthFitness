import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinishSignPage } from './finish-sign.page';

describe('FinishSignPage', () => {
  let component: FinishSignPage;
  let fixture: ComponentFixture<FinishSignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
