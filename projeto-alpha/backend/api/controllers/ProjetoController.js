/**
 * ProjetoController
 *
 * @description :: Server-side logic for managing projetoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	pending: function(req, res) {
        Projeto.find({situacao: ['P','A']}).exec(function(err, projetos) {
            if (err) {
                return res.json(err.status, err);
            }
            res.ok(projetos);
        });
    }
};
