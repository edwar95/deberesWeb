import { Body, Controller, Get, NotFoundException, Post, Put, Req, Res } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { PRODUCTO_SCHEMA } from './schemas/producto.schema';
import { BadRequestPipe } from './pipes/bad-request.pipe';

@Controller('Producto')
export class ProductoController {
  constructor(private _productoService: ProductoService){
  }

  @Get('listarProductos')
  listarTodos(@Res() response){
    return response.send(this._productoService.listarProductos());
  }

  @Post('crearProducto')
  crearProducto(@Req() request, @Res() response, @Body(new BadRequestPipe(PRODUCTO_SCHEMA)) nuevoProducto){
    const productoCreado = this._productoService.crearProducto(nuevoProducto);
    return nuevoProducto;
  }

  @Get('ObtenerUnProducto/:id')
  obtenerUnProducto(@Req() request, @Res() response){
    const producto = this._productoService.obtenerUnProducto(request.params.id);
    if (producto == null){
      throw new NotFoundException(
        {
          mensaje: 'No se encontro pelicula',
        },
      );
    } else{
      return response.send(producto); }
  }

  @Put('editarUnProducto/:id')
  editarUnProducto(@Req() request, @Body( new BadRequestPipe (PRODUCTO_SCHEMA)) productoModificado){
    const valor = request.params.id;
    this._productoService.editarProducto(valor, productoModificado);
  }
}