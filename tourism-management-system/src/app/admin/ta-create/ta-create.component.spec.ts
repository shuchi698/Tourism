import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaCreateComponent } from './ta-create.component';

describe('TaCreateComponent', () => {
  let component: TaCreateComponent;
  let fixture: ComponentFixture<TaCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
