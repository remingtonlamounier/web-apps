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
          size: 300,
          required: true
      },
      urgencia: {
          type: 'string',
          enum: ['baixa', 'media', 'alta'],
          required: true
      },
      situacao: {
          type: 'string',
          enum: ['P', 'A', 'F'],
          defaultsTo: 'P'
      },
      usuario: {
          model: 'usuario',
          required: true
      },
//      equipe: {
//          model: 'equipe'
//      },
      toJSON: function() {
          var obj = this.toObject(),
              situacao = obj.situacao;
          
          switch(situacao) {
              case 'P':
                  obj.situacao = 'Pendente';
                  break;
              case 'A':
                  obj.situacao = 'Em Andamento';
                  break;
              case 'F':
                  obj.situacao = 'Finalizado';
                  break;
          }
          
          return obj;
      }
  }
};
