/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var crypto = require('crypto');

module.exports = {

  attributes: {
      nome: {
          type: 'string',
          size: 60,
          required: true
      },
      email: {
          type: 'email',
          uinique: true,
          required: true
      },
      senha: {
          type: 'string',
          required: true,
          minLength: 6
      },
      telefone: {
          type: 'string',
          size: 12
      },
      grupo: {
          model: 'grupo'
      }
  },
    
  beforeCreate: function(values, next) {
//      values.senha = crypto.createHash('sha1').update(values.senha).digest('hex');
      next();
  }
};

