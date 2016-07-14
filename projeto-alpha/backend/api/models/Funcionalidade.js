/**
 * Funcionalidade.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      ator: {
          type: 'string',
          size: 60,
          required: true
      },
      descricao: {
          type: 'string',
          size: 255,
          required: true
      },
      objetivo: {
          type: 'string',
          size: 255,
          required: true
      },
      projeto: {
          model: 'projeto'
      }
  }
};
