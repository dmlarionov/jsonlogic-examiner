import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jsonlogic-rule-input',
  templateUrl: './jsonlogic-rule-input.component.html',
  styleUrls: ['./jsonlogic-rule-input.component.scss']
})
export class JsonlogicRuleInputComponent implements OnInit {

  @Output() changeEvent = new EventEmitter<string>();

  inputChange(value: string) {
    this.changeEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
