import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-intro-form',
  templateUrl: './intro-form.component.html',
  styleUrls: ['./intro-form.component.css']
})
export class IntroFormComponent implements OnInit {
  @Input() gameTitle = 'unnamed';
  @Input() playerName = 'unnamed';
  @Output() submitted = new EventEmitter();

  name: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    this.submitted.emit(this.name);
  }

}
