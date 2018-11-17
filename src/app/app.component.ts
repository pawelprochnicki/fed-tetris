import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameTitle = 'FED Tetris';
  playerName = 'Paweł';
  gameStarted = false;

  start(name) {
    this.playerName = name;
    this.gameStarted = true;
  }

  end() {
    this.gameStarted = false;
  }
}
