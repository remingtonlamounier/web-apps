module.exports = function(req, res, next) {
    if (!req.token || req.token.grupo === 'users') {
        return res.forbidden({error: 'resource not allowed'});
    }
    return next();
};