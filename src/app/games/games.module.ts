import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { GameDashboardComponent } from './game-dashboard/game-dashboard.component';
import { AnagramComponent } from './anagram/anagram.component';
import { DynamicLoaderDirective } from './dynamic-loader/dynamic-loader.directive';

import { GameConfigService } from './services/game-config.service';

@NgModule({
  declarations: [
    GameDashboardComponent,
    AnagramComponent,
    DynamicLoaderDirective
  ],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule
  ],
  entryComponents: [
    GameDashboardComponent,
    AnagramComponent
  ],
  providers:[
    GameConfigService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    GameDashboardComponent
  ]
})
export class GamesModule { }
