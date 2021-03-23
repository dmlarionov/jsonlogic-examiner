import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonlogicRuleInputComponent } from './jsonlogic-rule-input.component';

describe('JsonlogicRuleInputComponent', () => {
  let component: JsonlogicRuleInputComponent;
  let fixture: ComponentFixture<JsonlogicRuleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonlogicRuleInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonlogicRuleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
