import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenListComponent } from './pen-list.component';

describe('PenListComponent', () => {
  let component: PenListComponent;
  let fixture: ComponentFixture<PenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
