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
      projeto: {
          model: 'projeto'
      },
      usuario: {
          model: 'usuario',
          required: true
      }
  },
    
  log: function(action, model, usuario, projeto, callback) {
      Usuario.findOne(usuario).exec(function(err, user) {
          if (err) {
              return callback(err);
          }
          
          var activity = {
                descricao: user.nome + ' ' + action + ' um(a) ' + model,
                projeto: projeto,
                usuario: usuario
              };
    
          if (projeto && model !== 'projeto') {
              activity.descricao += ' no projeto ' + projeto;
          }
          
          Atividade.create(activity).exec(function(err, atividade) {
              if (err) {
                  return callback(err);
              }
              callback(null, atividade);
          });      
      });
  }
};
