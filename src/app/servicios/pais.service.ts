import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

    public paisActual;
  
    constructor(private http: HttpClient) {
  
      this.paisActual = "Argentina";
  
    }
  
    public obtenerPaisActual() {
      return this.paisActual;
    }
  
    public asignarPaisActual(pais: string) {
  
      this.paisActual = pais;
  
    }
  
    traerPaises() {
      return this.http.get("https://restcountries.eu/rest/v2/all");
  
    }
  
    traerUnPais(pais: string) {
  
  
    }
  
  }