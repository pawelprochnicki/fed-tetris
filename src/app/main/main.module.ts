import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { ControlerComponent } from './controler/controler.component';

@NgModule({
  imports: [
    CommonModule,
    TetrisCoreModule,
  ],
  declarations: [GameComponent, ControlerComponent],
  exports: [
    GameComponent,
  ]
})
export class MainModule { }
