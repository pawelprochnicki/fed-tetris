import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';

@Component({
  selector: 'app-myscore',
  templateUrl: './myscore.component.html',
  styleUrls: ['./myscore.component.css']
})
export class MyscoreComponent implements OnInit {
  constructor(
    public score: ScoreService
  ) {
  }

  ngOnInit() {
  }

}
