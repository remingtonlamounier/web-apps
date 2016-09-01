module.exports = function(req, res, next) {
    if (!req.token) {
        return res.badRequest({error: 'token not found'});
    }

    var actions = ['create','update','destroy'];
    
    if (actions.indexOf(req.options.action) === -1) {
        return next();
    }
    
    function retrieveProjeto(req) {
        var result = null;
        
        if (req.options.model === 'projeto') {
            result = req.param('id');
        } else if (req.options.model === 'estoria') {
            result = req.body ? req.body.projeto : null;
        }
        
        return projeto;
    };
    
    function writeDescricao(req, projeto) {
        var action = req.options.action
            .replace('create', 'criou')
            .replace('update', 'atualizou')
            .replace('destroy', 'deletou'),
            phrase = req.token.nome + ' ' + action + ' um(a) ' + req.options.model;
        
        if (projeto && req.options.model !== 'projeto') {
            phrase += ' para o projeto ' + projeto;
        }
        
        return phrase;
    };
    
    var projeto = retrieveProjeto(req),
        descricao = writeDescricao(req, projeto),
        activity = {
            descricao: descricao,
            projeto: projeto,
            usuario: req.token.id
        };
    
    Atividade.create(activity).exec(function(err, atividade) {
        if (err) {
            return res.serverError({error: 'create user activity fail'});
        }
        return next();
    });
};