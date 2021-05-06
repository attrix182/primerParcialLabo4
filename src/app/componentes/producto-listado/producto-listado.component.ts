import { ProductoService } from './../../servicios/producto.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-listado',
  templateUrl: './producto-listado.component.html',
  styleUrls: ['./producto-listado.component.scss']
})
export class ProductoListadoComponent implements OnInit {
  
  @Input()  listadoProductos:Producto[];

  @Output() peliculaSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  listaPeliculas: any;

  tamanioLista:Number;

  constructor(private peliculaService: ProductoService) {     
    this.peliculaService.getAll().subscribe(peliculas =>{  
    this.listadoProductos=peliculas;
    console.log( "a" + this.listadoProductos.length)

    this.tamanioLista =  this.listadoProductos.length

  })
 }
  ngOnInit(): void {
  }


  mostrarDetalles(parametroProducto)
  {
  	console.log(parametroProducto);
    this.peliculaSeleccionado.emit(parametroProducto);
  }



}