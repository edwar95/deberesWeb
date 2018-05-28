import {Injectable, MiddlewareFunction, NestMiddleware} from "@nestjs/common";

@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog: string): MiddlewareFunction {

        return (request, response, next) => {
            const respuesta = {
                baseUrl: request.baseUrl,
                hostname: request.hostname,
                subdomains: request.subdomains,
                ip: request.ip,
                method: request.method,
                originalUrl: request.originalUrl,
                path: request.path,
                protocol: request.protocol,
                headers: request.headers,
            };
           if(nivelDeLog=="archivo"){
               var fileWriter= require('fileWriter');
               fileWriter.writeFileAsync('logs.txt', respuesta, function (err) {
                   if (err) throw err;
                   console.log('Saved!');
               });
           }
           if (nivelDeLog=="consola"){
               console.log(respuesta);
           }
           if(nivelDeLog=="todo"){
               var fileWriter= require('fileWriter');
               fileWriter.writeFileAsync('logs.txt', respuesta, function (err) {
                   if (err) throw err;
                   console.log('Saved!');
               });
               console.log(respuesta);
           }
            next(); // ERROR SI NO SE LLAMA
        };
    }
}