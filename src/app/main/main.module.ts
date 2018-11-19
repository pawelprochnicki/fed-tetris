import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { ControlerComponent } from './controler/controler.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { HiscoreComponent } from './hiscore/hiscore.component';
import { HttpClientModule } from '@angular/common/http';
import { BestPipe } from './best.pipe';
import { MyscoreComponent } from './myscore/myscore.component';
import { MyscorePipe } from './myscore.pipe';

@NgModule({
  imports: [
    CommonModule,
    TetrisCoreModule,
    HotkeyModule.forRoot(),
    HttpClientModule
  ],
  declarations: [GameComponent, ControlerComponent, HiscoreComponent, BestPipe, MyscoreComponent, MyscorePipe],
  exports: [
    GameComponent,
  ]
})
export class MainModule { }
