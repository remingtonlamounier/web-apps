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

  afterCreate: function(insertedRecord, next) {
      Atividade.log('criou', 'estória', insertedRecord.usuario, insertedRecord.projeto, function(err, activity) {
          if (err) {
              sails.log.error(err);
          }
          return next();
      });
  },
    
  afterDestroy: function(destroyedRecords, next) {
      var ids = destroyedRecords.map(function(item) { return item.id; });
      
      var logErrors = function(err, activity) {
          if (err) {
              sails.log.error(err);
          }
          return err ? true : false;
      };
      
      Criterio.destroy({estoria: ids}).exec(function(err, criterios) {
          if (logErrors(err)) {
              return next();
          }
          
          for (var i = 0; i < destroyedRecords.length; i++) {
              Atividade.log('deletou', 'estória', destroyedRecords[i].usuario, destroyedRecords[i].projeto, logErrors);
          }

          return next();
      });
  }
};
