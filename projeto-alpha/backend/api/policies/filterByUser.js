module.exports = function(req, res, next) {
    if (req.token) {
        req.options.where = req.options.where || {};
        req.options.where.usuario = req.token.id;
    }
    return next();
};