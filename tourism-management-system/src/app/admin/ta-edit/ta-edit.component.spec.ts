import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaEditComponent } from './ta-edit.component';

describe('TaEditComponent', () => {
  let component: TaEditComponent;
  let fixture: ComponentFixture<TaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
