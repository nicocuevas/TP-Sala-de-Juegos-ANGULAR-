import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/guard/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RankingsComponent } from './rankings/rankings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'games',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'games',
        children: [
          { path: '', component: HomeComponent }
        ]
      }
    ]
  },
  {
    path: 'rankings',
    component: RankingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
