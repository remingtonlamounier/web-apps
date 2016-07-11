/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
          size: 12,
          required: true
      },
      grupo: {
          model: 'grupo'
      }
  }
};

