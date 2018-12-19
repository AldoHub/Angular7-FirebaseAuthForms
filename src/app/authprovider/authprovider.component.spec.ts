import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthproviderComponent } from './authprovider.component';

describe('AuthproviderComponent', () => {
  let component: AuthproviderComponent;
  let fixture: ComponentFixture<AuthproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
