module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }
    
    if (req.token.grupo === 'admins') {
        return next();
    }
    
    var modelId = req.param('id'),
        model = sails.models[req.options.model];

    if (!model || !modelId) {
        return res.badRequest({error: 'the policy block request that not have url parameters'});
    }
    
    model.findOne(parseInt(modelId)).exec(function(err, record) {
        if (err) {
            return res.json(err.status, err);
        }
        if (!record) {
            return res.notFound({error: 'resource not found'});
        }
        if (record.usuario !== req.token.id) {
            return res.forbidden({error: 'resource not allowed'});
        }
        return next();
    });
};