import { Pais } from './../../clases/pais';
import { PaisService } from './../../servicios/pais.service';
import { ProductoService } from './../../servicios/producto.service';
import { Producto } from './../../clases/producto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.scss']
})
export class AltaProductoComponent implements OnInit {


  @Output() altaProducto: EventEmitter<any>= new EventEmitter<any>();

  public unProducto: Producto;

  public flagPais;
  public test:any;
  token:any;
  unPaisSeleccionado : Pais;

  public constructor(private productoSVC: ProductoService, private router: Router) { this.unProducto = new Producto(); }

  cambiarPais(elPais: any) {
    console.log("Cambiando pais");
    console.log(elPais);
  this.unPaisSeleccionado = elPais;
  this.unProducto.paisOrigen = elPais;
  this.test = elPais.name;

  }

  ngOnInit(): void {


    this.token = localStorage.getItem('token');
    if(this.token == null)
    {
      this.router.navigateByUrl("bienvenido");

    }
    
  }




  crearProducto() {


    this.productoSVC.Crear(this.unProducto).then(() => {

      console.log('se envio el Actor');
      console.log(this.unProducto);
      location.assign('/altaProducto');
    })

  
  }
}
