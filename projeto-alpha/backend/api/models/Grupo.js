/**
 * Grupo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nome: {
          type: 'string',
          size: 30,
          required: true
      },
      tipo: {
          type: 'string',
          enum: ['admins', 'usuarios', 'desenvolvedores']
      },
      usuarios: {
          collections: 'usuario',
          via: 'grupo'
      }
  }
};

