import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonlogicDataInputComponent } from './jsonlogic-data-input.component';

describe('JsonlogicDataInputComponent', () => {
  let component: JsonlogicDataInputComponent;
  let fixture: ComponentFixture<JsonlogicDataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonlogicDataInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonlogicDataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
