import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/clases/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent implements OnInit {

  token: any;
  prodParaMostar:Producto;

  constructor() { }

  ngOnInit(): void {


    this.token = localStorage.getItem('token');

    console.log(this.token)

    if(this.token == null)
    {
   

      location.assign('bienvenida');

    }
    
  }


  tomarProductoParaDetalles(NuevaPeli: Producto)
  {console.log(NuevaPeli)
    this.prodParaMostar=NuevaPeli;   
  }

}
