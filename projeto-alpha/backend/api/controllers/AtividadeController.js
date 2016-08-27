/**
 * AtividadeController
 *
 * @description :: Server-side logic for managing atividades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	feed: function(req, res) {
        var where = { or: [] },
            projs;
        
        Projeto.find({usuario: req.token.id}).exec(function(err, projetos) {
            if (err) {
                return res.json(err.status, err);
            }
            
            if (projetos.length > 0) {
                projs = projetos.map(function(item) { return item.id });
                where.or.push({ projeto: projs });
            }
            
            where.or.push({ usuario: req.token.id });
            
            Atividade.find(where).exec(function(err, atividades) {
                if (err) {
                    return res.json(err.status, err);
                }
                res.ok(atividades);
            });
        });
    }
};
