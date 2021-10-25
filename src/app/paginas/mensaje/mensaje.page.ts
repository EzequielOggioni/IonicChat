import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mensaje } from 'src/app/Clase/mensaje';
import { ApiHelperService } from 'src/app/services/api-helper.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.page.html',
  styleUrls: ['./mensaje.page.scss'],
})
export class MensajePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private data: DataService,
    private api: ApiHelperService) { }
  mensajes: Mensaje[];
  usuarioId: number;

  ngOnInit() {
    this.usuarioId = <number><unknown>this.activatedRoute.snapshot.paramMap.get('id');
    this.api.TraerMensajes(this.data.usuario.id, this.data.usuario.token, this.usuarioId).
      subscribe(
        datos =>
          this.mensajes = datos
    );
  }

}
