import { UsuariofireService } from './../../servicios/usuariofire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public unUsuario: Usuario;
  //public existe: Boolean;
  public loged: Boolean;
  cargando: boolean;




  constructor(private servicioUsuario: UsuariofireService, private router: Router) { this.unUsuario = new Usuario(); this.loged = false; }





  public LoginRapidoAdmin() {
    this.unUsuario.clave = '123456';
    this.unUsuario.correo = "admin@admin.com";

  }


  public LoginRapidoEmpleado() {
    this.unUsuario.clave = '123456';
    this.unUsuario.correo = "empleado@empleado.com";

  }



  public Login() {


    this.servicioUsuario.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {

        localStorage.setItem('token', this.unUsuario.correo)

        this.cargando = true;
        this.router.navigateByUrl("altaProducto");
        console.log('existe')
        
      }
      else {
        //this.cargando = true;
        console.log("error")
      }

    })


  }






  ngOnInit(): void {



  }

}
