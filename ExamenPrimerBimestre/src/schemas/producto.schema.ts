import * as Joi from 'joi';

export const PRODUCTO_SCHEMA = Joi
  .object()
  .keys({
    numeroProducto: Joi.number().integer().required(),
    nombre: Joi.string().min(3).max(30).required(),
    descripcion: Joi.string().max(200),
    precio: Joi.number().greater(0),
    fechaLanzamientoProducto: Joi.date(),
    aniosGarantia: Joi.number(),
    tiendaID: Joi.number(),
  });