import { ScoreService } from './../score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiscore',
  templateUrl: './hiscore.component.html',
  styleUrls: ['./hiscore.component.css']
})
export class HiscoreComponent implements OnInit {
  constructor(
    public score: ScoreService
  ) {
  }

  ngOnInit() {
  }

}
