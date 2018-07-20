import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css']
})
export class SeleccionTransferenciaComponent implements OnInit {

  constructor() { }
  arregloUsuario = [
    1,
    'https://pbs.twimg.com/media/C7IqZcdVsAAkkYS.jpg',
    'GNR'
  ]

  productoSeleccionado=[
    {
      id:1,
      imagen:'Producto 1, Producto 1, Producto 1s',
      texto:'GNR',
      mostrar:false,
    },
  ];
  arregloProductos = [
    {
      id:1,
      imagen:'Producto 1, Producto 1, Producto 1s',
      texto:'GNR',
      mostrar:true,
      btnText:'Seleccionar Transferencia',
    },
    {
      id:2,
      imagen:'producto 2, producto 2, producto 2,',
      texto:'Metallica',
      mostrar:true,
      btnText:'Seleccionar Transferencia',
    },
    {
      id:3,
      imagen:'producto 3, producto 3, producto 3',
      texto:'Blink182',
      mostrar:true,
      btnText:'Seleccionar Transferencia',
    },
    {
      id:4,
      imagen:'producto 4, producto 4, producto 4',
      texto:'LOG',
      mostrar:true,
      btnText:'Seleccionar Transferencia',
    }
  ];


  ngOnInit() {
  }

}
