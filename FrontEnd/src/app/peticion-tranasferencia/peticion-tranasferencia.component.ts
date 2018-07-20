import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-peticion-tranasferencia',
  templateUrl: './peticion-tranasferencia.component.html',
  styleUrls: ['./peticion-tranasferencia.component.css']
})
export class PeticionTranasferenciaComponent implements OnInit {

  constructor() { }
  arregloProductos = [
    {
      id:1,
      imagen:'Producto 1, Producto 1, Producto 1s',
      texto:'GNR'
    },
    {
      id:2,
      imagen:'producto 2, producto 2, producto 2,',
      texto:'Metallica'
    },
    {
      id:3,
      imagen:'producto 3, producto 3, producto 3',
      texto:'Blink182'
    },
    {
      id:4,
      imagen:'producto 4, producto 4, producto 4',
      texto:'LOG'
    }
  ];

arregloUsuario = [
      1,
      'https://pbs.twimg.com/media/C7IqZcdVsAAkkYS.jpg',
      'GNR'
  ]
  ngOnInit() {
  }

}
