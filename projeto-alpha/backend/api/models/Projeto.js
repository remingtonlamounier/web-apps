/**
 * Projeto.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      descricao: {
          type: 'string',
          size: 255,
          required: true
      },
      urgencia: {
          type: 'string',
          enum: ['baixa', 'media', 'alta'],
          required: true
      },
      usuario: {
          model: 'usuario'
      },
      funcionalidades: {
          collection: 'funcionalidade',
          via: 'projeto'
      }
  }
};
