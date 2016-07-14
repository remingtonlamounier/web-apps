module.exports = function(req, res, next) {
    if (!req.token) {
        return res.forbidden({error: 'resource not allowed'});
    }
    
    req.options.values = req.options.values || {};
    var usuario = req.options.values.usuario;
    
    if (usuario && parseInt(usuario) !== req.token.id) {
        return res.forbidden({error: 'action not allowed'});
    }
    
    return next();
};