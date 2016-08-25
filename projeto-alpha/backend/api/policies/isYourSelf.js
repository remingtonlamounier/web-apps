module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }
    
    if (req.options.model !== 'usuario') {
        return res.badRequest({error: 'the policy block request to any endpoints that are "usuario"'});
    }
    
    var usuario = req.param('id');
    
    if (parseInt(usuario) === req.token.id || req.token.grupo === 'admins') {
        return next();
    }
    
    return res.forbidden({error: 'action not allowed'});
};