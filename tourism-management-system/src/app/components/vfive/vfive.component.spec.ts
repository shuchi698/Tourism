import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VfiveComponent } from './vfive.component';

describe('VfiveComponent', () => {
  let component: VfiveComponent;
  let fixture: ComponentFixture<VfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
