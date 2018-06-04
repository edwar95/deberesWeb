import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaController } from './tienda.controller';
import { ProductoController } from './producto.controller';
import { AutorizacionController } from './autorizacion.controller';
import { TiendaService } from './tienda.service';
import { ProductoService } from './producto.service';

@Module({
  imports: [],
  controllers: [AppController, TiendaController, ProductoController, AutorizacionController],
  providers: [AppService, TiendaService, ProductoService],
})
export class AppModule {}
