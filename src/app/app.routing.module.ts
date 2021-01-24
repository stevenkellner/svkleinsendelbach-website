import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component'
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component'
import { ManagersComponent } from './pages/about-us/managers/managers.component'
import { PrivacyComponent } from './pages/about-us/privacy/privacy.component'
import { StatuteComponent } from './pages/about-us/statute/statute.component'
import { RequestComponent } from './pages/about-us/request/request.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'über-uns/vorstandschaft', component: ManagersComponent},
    {path: 'über-uns/sportheim', component: SportsHomeComponent},
    {path: 'über-uns/chronik', component: ChronicleComponent},
    {path: 'über-uns/satzung', component: StatuteComponent},
    {path: 'über-uns/datenschutz', component: PrivacyComponent},
    {path: 'über-uns/mitgliedsantrag', component: RequestComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}