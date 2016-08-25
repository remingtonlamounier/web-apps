/**
 * Estoria.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      ator: {
          type: 'string',
          size: 30,
          required: true
      },
      descricao: {
          type: 'string',
          size: 135,
          required: true
      },
      objetivo: {
          type: 'string',
          size: 165,
          required: true
      },
      projeto: {
          model: 'projeto',
          required: true
      },
      usuario: {
          model: 'usuario',
          required: true
      },
      criterios: {
          collection: 'criterio',
          via: 'estoria'
      }
  },

  afterDestroy: function(deleteds, callback) {
      var ids = deleteds.map(function(item) { return item.id; });
      Criterio.destroy({estoria: ids}).exec(callback);
  }
};
