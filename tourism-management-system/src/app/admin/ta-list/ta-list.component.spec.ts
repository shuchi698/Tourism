import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaListComponent } from './ta-list.component';

describe('TaListComponent', () => {
  let component: TaListComponent;
  let fixture: ComponentFixture<TaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
