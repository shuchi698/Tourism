import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAgentComponent } from './find-agent.component';

describe('FindAgentComponent', () => {
  let component: FindAgentComponent;
  let fixture: ComponentFixture<FindAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
