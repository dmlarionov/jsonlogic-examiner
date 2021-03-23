import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jsonlogic-data-input',
  templateUrl: './jsonlogic-data-input.component.html',
  styleUrls: ['./jsonlogic-data-input.component.scss']
})
export class JsonlogicDataInputComponent implements OnInit {

  @Output() changeEvent = new EventEmitter<string>();

  inputChange(value: string) {
    this.changeEvent.emit(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
