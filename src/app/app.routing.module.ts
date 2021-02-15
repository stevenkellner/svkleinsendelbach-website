import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballAdultsSecondTeamContactComponent } from './pages/football-adults/second-team/contact/contact.component';
import { FootballAdultsSecondTeamResultsComponent } from './pages/football-adults/second-team/results/results.component';
import { FootballAdultsFirstTeamContactComponent } from './pages/football-adults/first-team/contact/contact.component';
import { FootballAdultsFirstTeamResultsComponent } from './pages/football-adults/first-team/results/results.component';
import { FootballAdultsSecondTeamSquadComponent } from './pages/football-adults/second-team/squad/squad.component';
import { FootballAdultsSecondTeamTimesComponent } from './pages/football-adults/second-team/times/times.component';
import { FootballAdultsFirstTeamSquadComponent } from './pages/football-adults/first-team/squad/squad.component';
import { FootballAdultsFirstTeamTimesComponent } from './pages/football-adults/first-team/times/times.component';
import { FootballAdultsAhTeamContactComponent } from './pages/football-adults/ah-team/contact/contact.component';
import { FootballAYouthCResultsComponent } from './pages/football-youth/youth-c/results/results.component';
import { FootballAYouthEResultsComponent } from './pages/football-youth/youth-e/results/results.component';
import { FootballAdultsAhTeamSquadComponent } from './pages/football-adults/ah-team/squad/squad.component';
import { FootballAdultsAhTeamTimesComponent } from './pages/football-adults/ah-team/times/times.component';
import { FootballYouthCContactComponent } from './pages/football-youth/youth-c/contact/contact.component';
import { FootballYouthEContactComponent } from './pages/football-youth/youth-e/contact/contact.component';
import { FootballYouthCTimesComponent } from './pages/football-youth/youth-c/times/times.component';
import { FootballYouthCSquadComponent } from './pages/football-youth/youth-c/squad/squad.component';
import { FootballYouthETimesComponent } from './pages/football-youth/youth-e/times/times.component';
import { FootballYouthESquadComponent } from './pages/football-youth/youth-e/squad/squad.component';
import { FootballAdultsGeneralComponent } from './pages/football-adults/general/general.component';
import { FootballYouthGeneralComponent } from './pages/football-youth/general/general.component';
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component';
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component';
import { ManagersComponent } from './pages/about-us/managers/managers.component';
import { PrivacyComponent } from './pages/about-us/privacy/privacy.component';
import { StatuteComponent } from './pages/about-us/statute/statute.component';
import { RequestComponent } from './pages/about-us/request/request.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},

    {path: 'über-uns/vorstandschaft', component: ManagersComponent},
    {path: 'über-uns/mitgliedsantrag', component: RequestComponent},
    {path: 'über-uns/sportheim', component: SportsHomeComponent},
    {path: 'über-uns/datenschutz', component: PrivacyComponent},
    {path: 'über-uns/chronik', component: ChronicleComponent},
    {path: 'über-uns/satzung', component: StatuteComponent},

    {path: 'fussball/herren/übersicht', component: FootballAdultsGeneralComponent},

    {path: 'fussball/herren/erste-mannschaft/ergebnis', component: FootballAdultsFirstTeamResultsComponent},
    {path: 'fussball/herren/erste-mannschaft/kontakt', component: FootballAdultsFirstTeamContactComponent},
    {path: 'fussball/herren/erste-mannschaft/training', component: FootballAdultsFirstTeamTimesComponent},
    {path: 'fussball/herren/erste-mannschaft/kader', component: FootballAdultsFirstTeamSquadComponent},

    {path: 'fussball/herren/zweite-mannschaft/ergebnis', component: FootballAdultsSecondTeamResultsComponent},
    {path: 'fussball/herren/zweite-mannschaft/kontakt', component: FootballAdultsSecondTeamContactComponent},
    {path: 'fussball/herren/zweite-mannschaft/training', component: FootballAdultsSecondTeamTimesComponent},
    {path: 'fussball/herren/zweite-mannschaft/kader', component: FootballAdultsSecondTeamSquadComponent},

    {path: 'fussball/herren/alte-herren/kontakt', component: FootballAdultsAhTeamContactComponent},
    {path: 'fussball/herren/alte-herren/training', component: FootballAdultsAhTeamTimesComponent},
    {path: 'fussball/herren/alte-herren/kader', component: FootballAdultsAhTeamSquadComponent},

    {path: 'fussball/jugend/übersicht', component: FootballYouthGeneralComponent},

    {path: 'fussball/jugend/c-jugend/ergebnis', component: FootballAYouthCResultsComponent},
    {path: 'fussball/jugend/c-jugend/kontakt', component: FootballYouthCContactComponent},
    {path: 'fussball/jugend/c-jugend/training', component: FootballYouthCTimesComponent},
    {path: 'fussball/jugend/c-jugend/kader', component: FootballYouthCSquadComponent},

    {path: 'fussball/jugend/e-jugend/ergebnis', component: FootballAYouthEResultsComponent},
    {path: 'fussball/jugend/e-jugend/kontakt', component: FootballYouthEContactComponent},
    {path: 'fussball/jugend/e-jugend/training', component: FootballYouthETimesComponent},
    {path: 'fussball/jugend/e-jugend/kader', component: FootballYouthESquadComponent},

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/home'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}