import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemberRegPage } from './member-reg.page';

describe('MemberRegPage', () => {
  let component: MemberRegPage;
  let fixture: ComponentFixture<MemberRegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MemberRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
