import {Controller, Get, Req} from "@nestjs/common";

@Controller('Inicio')
export class InicioController{

    @Get('Home')
    requestResponse(@Req() request) {
        console.log('hola mundo');

    }
}