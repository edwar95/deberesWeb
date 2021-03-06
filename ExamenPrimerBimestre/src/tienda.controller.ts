import { Controller, Get, NotFoundException, Post, Put, Req, Res, Body} from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { BadRequestPipe } from './pipes/bad-request.pipe';
import { TIENDA_SCHEMA } from './schemas/tienda.schema';
import { TiendaBadRequestPipe } from './pipes/tienda-bad-request.pipe';

@Controller('Tienda')
export class TiendaController {

  constructor(private _tiendaService: TiendaService){
  }

  @Get('')
  listarTodos(@Res() response){
    return response.send(this._tiendaService.listarTiendas());
  }

  @Post('')
  crearTienda(@Req() request, @Res() response, @Body(new BadRequestPipe(TIENDA_SCHEMA)) nuevaTienda ){
    const tiendaCreada = this._tiendaService.crearTienda(nuevaTienda);
    return nuevaTienda;
  }

  @Get(':id')
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

  @Put(':id')
  editarUnaTienda(@Req() request, @Body(new BadRequestPipe(TIENDA_SCHEMA)) tiendaModificado){
    const valor = request.params.id;
    this._tiendaService.editarTienda(valor, tiendaModificado);
  }

}