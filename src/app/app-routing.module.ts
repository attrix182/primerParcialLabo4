import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bienvenida', component:  BienvenidaComponent},

  {
  path: 'usuario',

  children:
    [
      { path: 'login', component: LoginComponent }

    ]
}


];



/* const routes: Routes = [

  { path: 'busqueda', component: BusquedaComponent },
  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },

 {
  path: 'actor',

  children:
    [
      { path: 'alta', component: ActorAltaComponent },
      { path: 'actorpelicula', component: ActorPeliculaComponent }
    ]
},

{
  path: 'peliculas',

  children:
    [
      { path: 'alta', component: PeliculaAltaComponent }
    ]
},
];
 */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
