import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { SportsHomeComponent } from './pages/about-us/sports-home/sports-home.component'
import { ChronicleComponent } from './pages/about-us/chronicle/chronicle.component'
import { ManagersComponent } from './pages/about-us/managers/managers.component'
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'über-uns/vorstandschaft', component: ManagersComponent},
    {path: 'über-uns/sportheim', component: SportsHomeComponent},
    {path: 'über-uns/chronik', component: ChronicleComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}