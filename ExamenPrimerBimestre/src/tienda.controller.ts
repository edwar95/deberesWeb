import { Controller, Get, NotFoundException, Post, Put, Req, Res, Body} from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { BadRequestPipe } from './pipes/bad-request.pipe';
import { TIENDA_SCHEMA } from './schemas/tienda.schema';

@Controller('Tienda')
export class TiendaController {

  constructor(private _tiendaService: TiendaService){
  }

  @Get('listarTiendas')
  listarTodos(@Res() response){
    return response.send(this._tiendaService.listarTiendas());
  }

  @Post('crearTienda')
  crearTienda(@Req() request, @Res() response, @Body(new BadRequestPipe(TIENDA_SCHEMA)) nuevaTienda ){
    const tiendaCreada = this._tiendaService.crearTienda(nuevaTienda);
    return nuevaTienda;
  }

  @Get('ObtenerUnaTienda/:id')
  obtenerUnaTienda(@Req() request, @Res() response){
    const tienda = this._tiendaService.obtenerUnaTienda(request.params.id);
    if (tienda == null){
      throw new NotFoundException(
        {
          mensaje: 'No se encontro tienda',
        },
      );
    } else{
      return response.send(tienda); }
  }

  @Put('editarUnaTienda/:id')
  editarUnaTienda(@Req() request, @Body(new BadRequestPipe(TIENDA_SCHEMA)) tiendaModificado){
    const valor = request.params.id;
    this._tiendaService.editarTienda(valor, tiendaModificado);
  }

}