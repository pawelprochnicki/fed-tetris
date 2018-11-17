import { Component, OnInit, Input } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent implements OnInit {
  @Input() game: TetrisCoreComponent;

  constructor() { }

  ngOnInit() {
  }

}
