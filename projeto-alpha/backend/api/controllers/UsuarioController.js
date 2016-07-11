/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Override sails default "create" action
    create: function(req, res) {
        if (req.body.senha !== req.body.confirmaSenha) {
            return res.badRequest({error: 'password and confirm password doesn\'t match'});
        }
        
        delete req.body.confirmaSenha;
        
        Usuario.create(req.body).exec(function(err, user) {
            if (err) {
                return res.json(err.status, {error: err.summary});
            }
            
            Token.newToken(user, function(err, newToken) {
                if (err) {
                    return res.json(err.status, {error: err.summary});
                }
                
                res.created({
                    usuario: user,
                    token: newToken.key
                });
            });
        });
    },
    
	login: function(req, res) {
        var email = req.param('email'),
            password = req.param('senha');
        
        if (!email || !password) {
            return res.badRequest({error: 'e-mail and password is required'});
        }
        
        Usuario.findOne({email: email, senha: password}, function(err, user) {
            if (!user) {
                return res.notFound({error: 'invalid e-mail and/or password'});
            }
            
            Token.newToken(user, function(err, newToken) {
                if (err) {
                    return res.json(err.status, {error: err});
                }
                
                res.created({
                    usuario: user,
                    token: newToken.key
                });
            });
        });
    }
};

