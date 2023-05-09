import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarComponent } from './restar.component';

describe('RestarComponent', () => {
  let component: RestarComponent;
  let fixture: ComponentFixture<RestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestarComponent]
    });
    fixture = TestBed.createComponent(RestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
