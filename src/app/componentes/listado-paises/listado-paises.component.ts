import { PaisService } from './../../servicios/pais.service';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.scss']
})
export class ListadoPaisesComponent implements OnInit {

  public miPais: string = "";  

  public listaPaises: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();  

  constructor(private paisesService: PaisService) {

    this.paisesService.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesService.obtenerPaisActual();

    this.paisesService.traerPaises().subscribe(result => {

     // console.log(result);

    })



  }

  seleccionarPais(pais) {
    console.log(pais);
    this.paisSeleccionadoEvent.emit(pais);
  }

}
