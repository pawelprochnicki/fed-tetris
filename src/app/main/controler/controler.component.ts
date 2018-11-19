import { Component, OnInit, Input } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { Hotkey, HotkeysService } from 'angular2-hotkeys';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.css']
})
export class ControlerComponent implements OnInit {
  @Input() game: TetrisCoreComponent;

  constructor(private _hotkeysService: HotkeysService) {
    this._hotkeysService.add(new Hotkey('up', (event: KeyboardEvent): boolean => {
        this.game.actionRotate();
        return false;
    }));
    this._hotkeysService.add(new Hotkey('down', (event: KeyboardEvent): boolean => {
        this.game.actionDown();
        return false;
    }));
    this._hotkeysService.add(new Hotkey('left', (event: KeyboardEvent): boolean => {
        this.game.actionLeft();
        return false;
    }));
    this._hotkeysService.add(new Hotkey('right', (event: KeyboardEvent): boolean => {
        this.game.actionRight();
        return false;
    }));
  }

  ngOnInit() {
  }

}
