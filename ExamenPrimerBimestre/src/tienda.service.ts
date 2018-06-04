import { Injectable } from '@nestjs/common';

@Injectable()
export class TiendaService{
  tiendas: Tienda[]= [];

  listarTiendas(): Tienda[]{
    return this.tiendas;
  }

  crearTienda(tienda: Tienda): Tienda{
    this.tiendas.push(tienda);
    return tienda;
  }

  obtenerUnaTienda(id: number): Tienda{
    const resultado = this.tiendas.filter((tienda: Tienda) => {
      return tienda.tiendaID === id;
    });
    return resultado[0];
  }

  editarTienda(id: number, editedStore ): Tienda{
    const editado = this.obtenerUnaTienda(id);
    editado.nombre === editedStore.nombre;
    editado.direccion === editedStore.direccion;
    editado.fechaApertura === editedStore.fechaApertura;
    editado.RUC === editedStore.RUC;
    editado.matriz === editedStore.matriz;
    return editado;
  }
}

export interface Tienda {
  tiendaID: number;
  nombre: string;
  direccion: string;
  fechaApertura: string;
  RUC: number;
  matriz: boolean;
}