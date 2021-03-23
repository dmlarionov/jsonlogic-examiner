import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jsonlogic-result-output',
  templateUrl: './jsonlogic-result-output.component.html',
  styleUrls: ['./jsonlogic-result-output.component.scss']
})
export class JsonlogicResultOutputComponent implements OnInit {

  @Input() result: string;

  constructor() { 
    this.result = ""
  }

  ngOnInit(): void {
  }

}
