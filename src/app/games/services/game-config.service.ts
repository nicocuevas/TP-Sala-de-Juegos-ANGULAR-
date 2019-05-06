import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { Game } from '../models/game';

@Injectable()
export class GameConfigService {

  private _jsonURL = "assets/games-config.json";

  constructor(private http: HttpClient) {}

  getJSON(): Observable<any> {
    return this.http.get(this._jsonURL)
    .pipe(
      map((response:any) => response),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return of(result as T);
      })
    );
  }

}
