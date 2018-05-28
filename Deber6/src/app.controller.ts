import {Get, Controller, Req, Res} from '@nestjs/common';

const fs = require("fs");

@Controller() // decorators
export class AppController {
    @Get()
    root(@Req() request, @Res() response) {
        console.log('1 Inicio');
        let contenidoHtml = '';

        fs.readFile(
            __dirname + '/html/Index.html',
            'utf8',
            (error, contenidoDelArchivo) => {
                const nombre = 'Adrian';
                if (error) {
                    return response.send('Error');
                } else {
                    contenidoHtml = contenidoDelArchivo;

                    contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
                    return response.send(contenidoHtml);

                }

            }
        );


    }
}