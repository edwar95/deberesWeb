import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common';
import {AppController} from './app.controller';
import {UsuarioController} from "./usuario.controller";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from "./log.middleware";
import {UsuarioService} from "./usuario.service";
import {MiddlewaresContainer} from "@nestjs/core/middlewares/container";
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";


@Module({
    imports: [ // OtrosModulos
    ],
    providers: [
        UsuarioService
    ],
    controllers: [ // Controladores
        AppController,
        UsuarioController,
        ParametrosController
    ],
    components: [],
})
export class AppModule implements NestModule {
    nivelDeLog = 'consola';

    configure(consumer:MiddlewaresConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nivelDeLog)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}