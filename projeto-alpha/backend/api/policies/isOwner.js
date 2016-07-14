module.exports = function(req, res, next) {
    var userId = req.param('userId') || req.param('id');
    if (!req.token || !userId || parseInt(userId) !== req.token.id) {
        return res.forbidden({error: 'resource not allowed'});
    }
    return next();
};