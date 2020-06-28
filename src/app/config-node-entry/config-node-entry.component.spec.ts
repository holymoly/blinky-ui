import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigNodeEntryComponent } from './config-node-entry.component';

describe('ConfigNodeEntryComponent', () => {
  let component: ConfigNodeEntryComponent;
  let fixture: ComponentFixture<ConfigNodeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigNodeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigNodeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
