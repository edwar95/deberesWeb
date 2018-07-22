import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  usuarioSeleccionado = [
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR',
      btnMostrar:false
    }
  ];
  ngOnInit() {
  }

}
