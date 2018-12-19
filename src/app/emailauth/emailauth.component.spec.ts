import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailauthComponent } from './emailauth.component';

describe('EmailauthComponent', () => {
  let component: EmailauthComponent;
  let fixture: ComponentFixture<EmailauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
