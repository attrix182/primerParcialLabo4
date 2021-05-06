import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './componentes/producto-listado/producto-listado.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { LoginComponent } from './pages/login/login.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bienvenida', component:  BienvenidaComponent},
  { path: 'altaProducto', component:  AltaProductoComponent},
  { path: 'listadoProductos', component:  ProductoDetalleComponent},

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
