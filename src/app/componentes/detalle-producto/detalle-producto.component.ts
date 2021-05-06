import { Producto } from 'src/app/clases/producto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {


  @Input() unProd:Producto;

  constructor() { }

  ngOnInit(): void {
  }

}