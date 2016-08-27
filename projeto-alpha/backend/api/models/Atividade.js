/**
 * Atividade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      descricao: {
          type: 'string',
          required: true,
          size: 150
      },
      datahora: {
          type: 'datetime',
          required: true,
          defaultsTo: function() {
              return new Date();
          }
      },
      projeto: {
          model: 'projeto'
      },
      usuario: {
          model: 'usuario',
          required: true
      }
  }
};
