import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FootballAdultsFirstTeamContactComponent } from './pages/football-adults/first-team/contact/contact.component';
import { FootballAdultsGeneralComponent } from './pages/football-adults/general/general.component';
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component'
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component'
import { ManagersComponent } from './pages/about-us/managers/managers.component'
import { PrivacyComponent } from './pages/about-us/privacy/privacy.component'
import { StatuteComponent } from './pages/about-us/statute/statute.component'
import { RequestComponent } from './pages/about-us/request/request.component'
import { HomeComponent } from './pages/home/home.component'
import { FootballAdultsFirstTeamSquadComponent } from './pages/football-adults/first-team/squad/squad.component';
import { FootballAdultsFirstTeamTimesComponent } from './pages/football-adults/first-team/times/times.component';
import { FootballAdultsFirstTeamResultsComponent } from './pages/football-adults/first-team/results/results.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'über-uns/vorstandschaft', component: ManagersComponent},
    {path: 'über-uns/sportheim', component: SportsHomeComponent},
    {path: 'über-uns/chronik', component: ChronicleComponent},
    {path: 'über-uns/satzung', component: StatuteComponent},
    {path: 'über-uns/datenschutz', component: PrivacyComponent},
    {path: 'über-uns/mitgliedsantrag', component: RequestComponent},
    {path: 'fussball/herren/übersicht', component: FootballAdultsGeneralComponent},
    {path: 'fussball/herren/erste-mannschaft/kader', component: FootballAdultsFirstTeamSquadComponent},
    {path: 'fussball/herren/erste-mannschaft/training', component: FootballAdultsFirstTeamTimesComponent},
    {path: 'fussball/herren/erste-mannschaft/kontakt', component: FootballAdultsFirstTeamContactComponent},
    {path: 'fussball/herren/erste-mannschaft/ergebnis', component: FootballAdultsFirstTeamResultsComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}