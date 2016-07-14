module.exports = function(req, res, next) {
    if (req.token) {
        req.options.values = req.options.values || {};
        req.options.where.values = req.token.id;
    }
    return next();
};