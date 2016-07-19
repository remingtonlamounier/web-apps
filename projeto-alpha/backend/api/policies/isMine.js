module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }
    
    var model = sails.models[req.options.model],
        modelId = req.param('id');
    
    if (!model || !modelId) {
        return next();
    }
    
    console.log(modelId);
    model.findOne({id: parseInt(modelId)}).exec(function(err, record) {
        if (err) {
            return res.badRequest(err);
        }
        console.log(record);
        if (!record) {
            return res.notFound({error: 'resource not found'});
        }
        if (record.usuario !== req.token.id) {
            return res.forbidden({error: 'resource not allowed'});
        }
        return next();
    });
};