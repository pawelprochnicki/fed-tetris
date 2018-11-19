import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  data: any = [];
  url = 'http://tetris.chrum.it/scores';
  constructor(private _http: HttpClient) {
    this.fetchData();
   }

  fetchData() {
    const headers = new HttpHeaders({
      'accept': 'application/json'
    });

    this.data = this._http.get(this.url, {
      headers: headers
    }).subscribe((result) => {
      this.data = result;
    });
  }

  submit(name, points) {
    this._http.post(this.url, {
      name: name,
      score: points,
      auth: 'pproc'
    }).subscribe((result) => {
      this.data = result;
    });
  }
}
