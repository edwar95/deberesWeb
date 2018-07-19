import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {and} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario='';
  contrasena='';
  btn='';
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  usrRoot(){
    if(this.usuario==='david' && this.contrasena==='david'  ){

    }
    else {
      alert("Ingerese usuario y contraseña válidos")
    }



  }

}
