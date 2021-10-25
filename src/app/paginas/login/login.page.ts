import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clase/usuario';
import { ApiHelperService } from 'src/app/services/api-helper.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public registro:boolean
  public usuario:Usuario;

  constructor(private apiServ: ApiHelperService, private route:Router, private data:DataService) { 
    this.registro = false;
    this.usuario = new Usuario();
  }

  nuevo(){
    return this.registro;
  }

  ngOnInit() {    
  }
  
 loguear(){
   console.log(this.usuario);
   this.apiServ.loguear(this.usuario).subscribe(t=> {
    this.data.usuario = <Usuario><unknown>(t[0]);
    console.log(t);
    this.route.navigateByUrl('usuarios');
  }
    );
 }
  
  
}
