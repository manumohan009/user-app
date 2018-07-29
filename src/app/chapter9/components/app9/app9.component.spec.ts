import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App9Component } from './app9.component';

describe('App9Component', () => {
  let component: App9Component;
  let fixture: ComponentFixture<App9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
