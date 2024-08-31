import { Routes } from '@angular/router';
import { LiveScoreComponent } from './Components/live-score/live-score.component';
import { MatchesComponent } from './Components/matches/matches.component';
import { PointTableComponent } from './Components/point-table/point-table.component';
import { RankingComponent } from './Components/ranking/ranking.component';
import { PlayersComponent } from './Components/players/players.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';

export const routes: Routes = [
    {path:'', component: LiveScoreComponent},
    {path:'matches', component: MatchesComponent},
    {path:'pointTable', component: PointTableComponent},
    {path:'ranking', component: RankingComponent},
    {path:'players', component: PlayersComponent},
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent}
];
