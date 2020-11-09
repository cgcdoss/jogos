import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcaComponent } from './forca.component';

describe('ForcaComponent', () => {
  let component: ForcaComponent;
  let fixture: ComponentFixture<ForcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
