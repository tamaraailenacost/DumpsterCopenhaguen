import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'home'   , component: MapaComponent },
  { path: 'login'   , component: LoginComponent },
  { path: 'register'   , component: RegisterComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
