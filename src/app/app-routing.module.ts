import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LogInComponent } from './components/login/login.component';
import { MealDetailsComponent } from './components/meal-details/meal-details.component';
import { PlatillosComponent } from './components/platillos/platillos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard, AuthGuardInit } from './services/auth/auth.service';

const routes: Routes = [
  {path: 'login', component: LogInComponent, canActivate: [AuthGuardInit]},
  {path: 'welcome', component: BienvenidaComponent, canActivate: [AuthGuard]},
  {path: 'details', component: MealDetailsComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'meals', component: PlatillosComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
