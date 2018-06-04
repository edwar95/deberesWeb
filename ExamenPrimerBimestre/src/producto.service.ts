import { Injectable } from '@nestjs/common';

@Injectable()
export  class ProductoService {
  productos: Producto[]= [];

  listarProductos(): Producto[]{
    return this.productos;
  }

  crearProducto(producto: Producto): Producto{
    this.productos.push(producto);
    return producto;
  }

  obtenerUnProducto(id: number): Producto{
    const resultado = this.productos.filter((producto: Producto) => {
      return producto.numeroProducto === id;
    });
    return resultado[0];
  }

  editarProducto(id: number, editedProduct ): Producto{
    const editado = this.obtenerUnProducto(id);
    editado.nombre === editedProduct.nombre;
    editado.descripcion === editedProduct.descripcion;
    editado.precio === editedProduct.precio;
    editado.fechaLanzamientoProducto === editedProduct.fechaLanzamientoProducto;
    editado.aniosGarantia === editedProduct.aniosGarantia;
    editado.tiendaID === editedProduct.tiendaID;
    return editado;
  }
}

export interface Producto {
  numeroProducto: number;
  nombre: string;
  descripcion: string;
  precio: number ;
  fechaLanzamientoProducto: string;
  aniosGarantia: number;
  tiendaID: number;
}