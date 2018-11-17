import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  @Output() ended = new EventEmitter;
  @Input() playerName;

  @ViewChild(TetrisCoreComponent) game;

  constructor() { }

  ngOnInit() {
  }

  startPlaying() {
    this.game.actionStart();
  }

  submit() {
    this.ended.emit();
  }
}
