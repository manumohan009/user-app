import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App8Component } from './app8.component';

describe('App8Component', () => {
  let component: App8Component;
  let fixture: ComponentFixture<App8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
