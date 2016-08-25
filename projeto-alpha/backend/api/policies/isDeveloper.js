module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }
    if (['develops','admins'].indexOf(req.token.grupo) === -1) {
        return res.forbidden({error: 'resource not allowed'});
    }
    return next();
};