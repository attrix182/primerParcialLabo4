import { Producto } from 'src/app/clases/producto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pais-producto',
  templateUrl: './pais-producto.component.html',
  styleUrls: ['./pais-producto.component.scss']
})
export class PaisProductoComponent implements OnInit {

  @Input() detalleProd: Producto

  constructor() { }

  ngOnInit(): void {
  }

}

