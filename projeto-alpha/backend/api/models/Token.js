/**
 * Token.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var crypto = require('crypto');

module.exports = {
  connection: 'memory',
    
  attributes: {
      key: {
          type: 'string',
          unique: true,
          required: true
      },
      secret: {
          type: 'string',
          size: 32,
          required: true
      }
  },
    
  newToken: function(user, callback) {
    var tokenSecret = crypto.randomBytes(32).toString('hex'),
        payload = { id: user.id, nome: user.nome, email: user.email, grupo: user.grupo },
        token = {
            key: TokenService.sign(payload, tokenSecret),
            secret: tokenSecret
        };

    Token.findOne({key: token.key}, function(err, finded) {
        if (finded) {
            callback(err, finded);
            return;
        }
        
        Token.create(token).exec(callback);
    });
  }
};

