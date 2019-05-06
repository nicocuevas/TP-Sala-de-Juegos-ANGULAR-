import { Component, OnInit } from '@angular/core';
import { GameConfigService } from '../services/game-config.service';

import { ComponentType } from '../constants';
import { DynamicComponentData } from '../models/dynamic-component-data';


@Component({
  selector: 'app-game-dashboard',
  templateUrl: './game-dashboard.component.html',
  styleUrls: ['./game-dashboard.component.scss']
})
export class GameDashboardComponent implements OnInit {

  gameList:Array<any>;
  breakpoint:Number;
  selectedGame:DynamicComponentData = null;

  constructor(private gameConfigServ:GameConfigService) {}

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1 : 4;
    this.gameConfigServ.getJSON().subscribe(
      data => {    
        this.gameList = data;
      });
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 4;
  }

  back() {
    this.selectedGame = null;
  }

  play(game) {
    this.selectedGame = {
        meta: {
          type: ComponentType.anagram
        },
        data: {
          text: 'this is some body text',
          subText: 'this is some sub-text'
        }
      };
  }

}
