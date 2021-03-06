import { Component } from '@angular/core';
import * as jsonLogic from 'json-logic-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rule: string= '';
  data: string = '';
  result: string = '';

  dataChange(data: string) {
    this.data = data;
    this.result = '';
  }

  ruleChange(rule: string) {
    this.rule = rule;
    this.result = '';
  }

  applyRule() {
    this.result = jsonLogic.apply(JSON.parse(this.rule), JSON.parse(this.data));
  }
}
