module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }
    
    if (req.token.grupo === 'admins') {
        return next();
    }
    
    var modelId = req.param('id') || (req.options.where ? req.options.where.usuario : null),
        model = sails.models[req.options.model];

    if (!model || !modelId) {
        return res.badRequest({error: 'the policy block request that not have url parameters'});
    }
    
    model.findOne(parseInt(modelId)).exec(function(err, record) {
        if (err) {
            return res.json(err.status, err);
        }
        if (record && record.usuario !== req.token.id) {
            return res.forbidden({error: 'resource not allowed'});
        }
        return next();
    });
};