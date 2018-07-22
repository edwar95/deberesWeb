import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  indiceUsuarios=0;
  contadorUsuarios=0;
  arregloUsuariosAux=[];

  indiceTiendas=0;
  contadorTiendas=0;
  arregloTiendasAux=[];

  indiceProductos=0;
  contadorProductos=0;
  arregloProductosAux=[];

  aumentarContadorUsuarios(){
    this.contadorUsuarios++;
  }

  disminuirContadorUsuarios(){
    this.contadorUsuarios--;
  }

  verificarAntBtn(){

    if(this.arregloUsuarios[0]===this.arregloUsuariosAux[0]){
      return false;
    }else{
      return true;
    }
  }

  verificarSigBtn(){
    console.log("contador ant"+this.contadorUsuarios);
    if(this.contadorUsuarios===Math.floor(this.arregloUsuarios.length/4)){
      return false
    }else {
      return true;
    }
  }

  llenarArregloUsuariosAux(){
    for(var i=0; i<4;i++)
    {
      this.arregloUsuariosAux[i] = this.arregloUsuarios[i];
    }
    this.indiceUsuarios=i;
  }

  cargarNuevosUsuarios(){
    for( var i=0;i<4;i++){
      if(this.arregloUsuarios.length===i+this.indiceUsuarios){
        break;
      }
      this.arregloUsuariosAux[i]=this.arregloUsuarios[i+this.indiceUsuarios];

    }
    this.indiceUsuarios=i+this.indiceUsuarios;
    console.log(this.arregloUsuariosAux)
  }

  cargarAnterioresUsuarios(){

    if(0<=this.indiceUsuarios && this.indiceUsuarios<4){
      for(var i =0; i<4; i++){
        this.arregloUsuariosAux[i]=this.arregloUsuarios[i];
      }
      this.indiceUsuarios=0;
    }else {
      for( var i=0;i<4;i++){
        if(this.indiceUsuarios-4+i<0){
          break;
        }
        this.arregloUsuariosAux[i]=this.arregloUsuarios[this.indiceUsuarios-4+i];
      }
      this.indiceUsuarios=this.indiceUsuarios-4;
    }

  }





  arregloUsuarios = [
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR'
    },
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR_10'
    },
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR_8'
    },
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR_9'
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
    },
    {
      id:4,
      imagen:'https://pbs.twimg.com/profile_images/378800000346425166/12cf4d774d5acc20a1ddb9824a7a5812.png',
      texto:'LOG_1'
    },
    {
      id:4,
      imagen:'https://pbs.twimg.com/profile_images/378800000346425166/12cf4d774d5acc20a1ddb9824a7a5812.png',
      texto:'LOG_2'
    },
    {
      id:4,
      imagen:'https://pbs.twimg.com/profile_images/378800000346425166/12cf4d774d5acc20a1ddb9824a7a5812.png',
      texto:'LOG_3'
    }
  ];

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
    },
    {
      id:5,
      imagen:'producto 4, producto 4, producto 4',
      texto:'LOG'
    },
    {
      id:6,
      imagen:'producto 4, producto 4, producto 4',
      texto:'LOG'
    }
  ];

  arregloTiendas = [
    {
      id:1,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR',
      atribe:'primero'
    },
    {
      id:2,
      imagen:'https://pbs.twimg.com/profile_images/2978908212/bc17b264fdfeb2776558e90022d76d27.jpeg',
      texto:'Metallica',
      atribe:'segundo'
    },
    {
      id:3,
      imagen:'https://c-sf.smule.com/sf/s66/arr/38/74/93595bce-83a8-4a42-b1cc-6a23e37e3fc6_256.jpg',
      texto:'GNR',
      atribe:'primero'
    },
    {
      id:4,
      imagen:'https://pbs.twimg.com/profile_images/2978908212/bc17b264fdfeb2776558e90022d76d27.jpeg',
      texto:'Metallica',
      atribe:'segundo'
    },
    {
      id:5,
      imagen:'https://pbs.twimg.com/profile_images/2978908212/bc17b264fdfeb2776558e90022d76d27.jpeg',
      texto:'Metallica',
      atribe:'segundo'
    }
  ];

  llenarArregloTiendasAux(){
    for(var i=0; i<2;i++)
    {
      this.arregloTiendasAux[i] = this.arregloTiendas[i];
    }
    this.indiceTiendas=i;
  }

  cargarNuevasTiendas(){
    for( var i=0;i<2;i++){
      if(this.arregloTiendas.length===i+this.indiceTiendas){
        break;
      }
      this.arregloTiendasAux[i]=this.arregloTiendas[i+this.indiceTiendas];

    }
    this.indiceTiendas=i+this.indiceTiendas;
    console.log(this.arregloTiendasAux)
  }

  cargarAnterioresTiendas(){

    if(0<=this.indiceTiendas && this.indiceTiendas<2){
      for(var i =0; i<2; i++){
        this.arregloTiendasAux[i]=this.arregloTiendas[i];
      }
      this.indiceTiendas=0;
    }else {
      for( var i=0;i<2;i++){
        if(this.indiceTiendas+i<0){
          break;
        }
        this.arregloTiendasAux[i]=this.arregloTiendas[this.indiceTiendas-2+i];
      }
      this.indiceTiendas=this.indiceTiendas-2;
    }
  }

  verificarAntBtnTienda(){

    if(this.arregloTiendas[0]===this.arregloTiendasAux[0]){
      return false;
    }else{
      return true;
    }
  }

  verificarSigBtnTienda(){
    console.log("contador ant"+this.contadorTiendas);
    if(this.contadorTiendas===Math.floor(this.arregloTiendas.length/2)){
      return false
    }else {
      return true;
    }
  }

  aumentarContadorProductos(){
    this.contadorProductos++;
  }

  disminuirContadorProductos(){
    this.contadorProductos--;
  }

  llenarArregloProductosAux(){
    for(var i=0; i<4;i++)
    {
      this.arregloProductosAux[i] = this.arregloProductos[i];
    }
    this.indiceProductos=i;
  }

  cargarNuevosProductos(){
    for( var i=0;i<4;i++){
      if(this.arregloProductos.length===i+this.indiceProductos){
        break;
      }
      this.arregloProductosAux[i]=this.arregloProductos[i+this.indiceProductos];

    }
    this.indiceProductos=i+this.indiceProductos;
    console.log(this.arregloProductos)
  }

  cargarAnterioresProductos(){

    if(0<=this.indiceProductos && this.indiceProductos<4){
      for(var i =0; i<4; i++){
        this.arregloProductosAux[i]=this.arregloProductos[i];
      }
      this.indiceProductos=0;
    }else {
      for( var i=0;i<4;i++){
        if(this.indiceProductos+i<0){
          break;
        }
        this.arregloProductosAux[i]=this.arregloProductos[this.indiceProductos-4+i];
      }
      this.indiceProductos=this.indiceProductos-4;
    }
  }

  verificarAntBtnProducto(){

    if(this.arregloProductos[0]===this.arregloProductosAux[0]){
      return false;
    }else{
      return true;
    }
  }

  verificarSigBtnProducto(){
    console.log("contador ant"+this.contadorProductos);
    if(this.contadorProductos===Math.floor(this.arregloProductos.length/4)){
      return false
    }else {
      return true;
    }
  }

  aumentarContadorTiendas(){
    this.contadorTiendas++;
  }

  disminuirContadorTiendas(){
    this.contadorTiendas--;
  }
  constructor() { }

  ngOnInit() {
    this.llenarArregloUsuariosAux();
    this.llenarArregloTiendasAux();
    this.llenarArregloProductosAux();
  }

}
