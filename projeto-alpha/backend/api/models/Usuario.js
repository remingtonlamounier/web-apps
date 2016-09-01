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
          unique: true,
          required: true,
          size: 60
      },
      senha: {
          type: 'string',
          required: true,
          minLength: 6,
          size: 128
      },
      grupo: {
          type: 'string',
          required: true,
          enum: ['admins', 'develops', 'users']
      },
      telefone: {
          type: 'string',
          required: true,
          size: 12
      },
//      equipes: {
//          collection: 'equipe',
//          via: 'membros'
//      },
      toJSON: function() {
          var model = this.toObject();
          delete model.senha;
          return model;
      }
  }
};
