import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peticiones-espera',
  templateUrl: './peticiones-espera.component.html',
  styleUrls: ['./peticiones-espera.component.css']
})
export class PeticionesEsperaComponent implements OnInit {

  constructor() { }


productosIntercambio=[
  {
    id:1,
    imagen:'Producto 1, Producto 1, Producto 1s',
    texto:'GNR',
    mostrar:false,
  },
  {
    id:1,
    imagen:'Producto 1, Producto 1, Producto 1s',
    texto:'GNR',
    mostrar:false,
  },
];

usuariosPeticiones = [
  {
    id:1,
    imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
    texto:'GNR',
    btnMostrar:false
  },
  {
    id:2,
    imagen:'https://pbs.twimg.com/profile_images/2978908212/bc17b264fdfeb2776558e90022d76d27.jpeg',
    texto:'Metallica'
  },
  {
    id:3,
    imagen:'https://vignette.wikia.nocookie.net/rockband/images/2/2b/Blink-182.png/revision/latest?cb=20120908001858',
    texto:'Blink182'
  }
];

ngOnInit() {
}

}
