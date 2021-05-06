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

  @Output() productoSeleccionado: EventEmitter<any>= new EventEmitter<any>(); 

  listaProductos: any;

  tamanioLista:Number;

  auxPais:string;

  constructor(private prodSVC: ProductoService) {     
    this.prodSVC.getAll().subscribe(productos =>{  
    this.listadoProductos=productos;
    console.log( "a" + this.listadoProductos.length)

    this.tamanioLista =  this.listadoProductos.length

  

  })
 }
  ngOnInit(): void {
  }


  mostrarDetalles(parametroProducto)
  {
  	console.log(parametroProducto);
    this.productoSeleccionado.emit(parametroProducto);
  }



}