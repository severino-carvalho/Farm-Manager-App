import { Expose } from '@nestjs/class-transformer';
import * as Joi from 'joi';

export class EnvClass {
  @Expose()
  DATABASE_HOST: string;

  @Expose()
  DATABASE_PORT: number;

  @Expose()
  DATABASE_USER: string;

  @Expose()
  DATABASE_PASSWORD: string;

  @Expose()
  DATABASE_DATABASE: string;

  @Expose()
  ACCESS_SECRET: string;

  @Expose()
  REFRESH_SECRET: string;

  @Expose()
  SALT_CRYPT: number;
}

export const envSchema = Joi.object<EnvClass>({
  DATABASE_HOST: Joi.string().required().hostname().messages({
    'string.base': 'DATABASE_HOST deve ser uma string',
    'any.required': 'Insira uma variável DATABASE_HOST',
    'string.hostname': 'DATABASE_HOST deve ser um hostname válido',
  }),
  DATABASE_PORT: Joi.number().required().messages({
    'number.base': 'DATABASE_PORT deve ser um número',
    'any.required': 'Insira uma variável DATABASE_PORT',
  }),
  DATABASE_USER: Joi.string().required().messages({
    'string.base': 'DATABASE_USER deve ser uma string',
    'any.required': 'Insira uma variável DATABASE_USER',
  }),
  DATABASE_PASSWORD: Joi.string().required().messages({
    'string.base': 'DATABASE_PASSWORD deve ser uma string',
    'any.required': 'Insira uma variável DATABASE_PASSWORD',
  }),
  DATABASE_DATABASE: Joi.string().required().messages({
    'string.base': 'DATABASE_DATABASE deve ser uma string',
    'any.required': 'Insira uma variável DATABASE_DATABASE',
  }),
  ACCESS_SECRET: Joi.string().required().messages({
    'string.base': 'ACCESS_SECRET deve ser uma string',
    'any.required': 'Insira uma variável ACCESS_SECRET',
  }),
  REFRESH_SECRET: Joi.string().required().messages({
    'string.base': 'REFRESH_SECRET deve ser uma string',
    'any.required': 'Insira uma variável REFRESH_SECRET',
  }),
  SALT_CRYPT: Joi.number().required().messages({
    'number.base': 'SALT_CRYPT deve ser um número',
    'any.required': 'Insira uma variável SALT_CRYPT',
  }),
});
