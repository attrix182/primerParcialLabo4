import { environment } from './../environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './componentes/listado-paises/listado-paises.component';
import { ProductoListadoComponent } from './componentes/producto-listado/producto-listado.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { ProductoDetalleComponent } from './componentes/producto-detalle/producto-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    ListadoPaisesComponent,
    ProductoListadoComponent,
    DetalleProductoComponent,
    ProductoDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
