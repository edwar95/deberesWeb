import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {InicioController} from "./Inicio.controller";
import {LogMiddleware} from "./log.middleware";
import {PreguntasFrecuentesController} from "./PreguntasFrecuentes.controller";



@Module({
    imports: [ // OtrosModulos
    ],
    controllers: [ // Controladores
        AppController,
        InicioController,
        PreguntasFrecuentesController
    ],
    components: [],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewareConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1989)
            .forRoutes(
                InicioController,
                AppController,
                PreguntasFrecuentesController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}