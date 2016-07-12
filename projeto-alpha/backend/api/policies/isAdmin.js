module.exports = function(req, res, next) {
    if (!req.token || req.token.grupo !== 'admins') {
        return res.forbidden({error: 'resource not allowed'});
    }
    return next();
};