import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  arregloUsuarios = [
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR'
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
    },
    {
      id:4,
      imagen:'https://pbs.twimg.com/profile_images/378800000346425166/12cf4d774d5acc20a1ddb9824a7a5812.png',
      texto:'LOG'
    }
  ];

  arregloTiendas = [
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR'
    },
    {
      id:2,
      imagen:'https://pbs.twimg.com/profile_images/2978908212/bc17b264fdfeb2776558e90022d76d27.jpeg',
      texto:'Metallica'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}