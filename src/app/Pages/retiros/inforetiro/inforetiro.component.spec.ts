/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InforetiroComponent } from './inforetiro.component';

describe('InforetiroComponent', () => {
  let component: InforetiroComponent;
  let fixture: ComponentFixture<InforetiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforetiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
