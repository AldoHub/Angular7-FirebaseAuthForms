import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordlessComponent } from './passwordless.component';

describe('PasswordlessComponent', () => {
  let component: PasswordlessComponent;
  let fixture: ComponentFixture<PasswordlessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordlessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
