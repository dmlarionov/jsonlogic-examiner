import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonlogicResultOutputComponent } from './jsonlogic-result-output.component';

describe('JsonlogicResultOutputComponent', () => {
  let component: JsonlogicResultOutputComponent;
  let fixture: ComponentFixture<JsonlogicResultOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonlogicResultOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonlogicResultOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
