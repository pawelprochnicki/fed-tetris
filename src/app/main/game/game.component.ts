import { ScoreService } from './../score.service';
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

  points: number;

  constructor(
    private _score: ScoreService
  ) { }

  ngOnInit() {
  }

  onGameOver() {
    this._score.submit(this.playerName, this.points);
  }

  onLineCleared() {
    this.points++;
  }

  startPlaying() {
    this.game.actionStart();
  }

  submit() {
    this.ended.emit();
  }

  fakeGameOver() {
    this._score.submit(this.playerName, 1000);
  }
}
