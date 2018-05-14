import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {InicioController} from "./Inicio.controller";
import {PreguntasFrecuentes} from "./PreguntasFrecuentes";

@Module({
  imports: [],
  controllers: [AppController, InicioController,PreguntasFrecuentes],
  providers: [AppService],
})
export class AppModule {}
