import * as Joi from 'joi';

export const TIENDA_SCHEMA = Joi
  .object()
  .keys({
    tiendaID: Joi.number().integer().greater(0).required(),
    nombre: Joi.string().min(3).max(30).required(),
    direccion: Joi.string().min(10).required(),
    fechaApertura: Joi.date(),
    RUC: Joi.number().size(11).required(),
    matriz: Joi.booleanValue(),
  });