import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionCreateComponent } from './attraction-create.component';

describe('AttractionCreateComponent', () => {
  let component: AttractionCreateComponent;
  let fixture: ComponentFixture<AttractionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
