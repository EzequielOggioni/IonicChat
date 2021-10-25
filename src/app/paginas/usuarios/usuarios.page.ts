import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clase/usuario';
import { ApiHelperService } from 'src/app/services/api-helper.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public usuarios!:Usuario[];
  constructor(private data:DataService, private api:ApiHelperService) { }

  ngOnInit() {
    this.api.traerUsuarios(this.data.usuario.id,this.data.usuario.token)
    .subscribe(
      d=> this.usuarios = d
    )
  }

  buscarUsuarios(){

  }

}
