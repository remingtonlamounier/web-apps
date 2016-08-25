/**
 * EstoriaController
 *
 * @description :: Server-side logic for managing estorias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    // Override sails default "create" action
    create: function(req, res) {
        var model = req.body,
            criterios = [],
            i = 0;

        if (model.criterios) {
            criterios = model.criterios;
            delete model.criterios;
        }

        Estoria.create(model).exec(function(err, estoria) {
            if (err) {
                return res.serverError(err);
            }

            if (!_.isArray(criterios) || !criterios.length) {
                return res.created(estoria);
            }

            for (; i < criterios.length; i++) {
                estoria.criterios.add(criterios[i]);
            }

            estoria.save(function(err) {
                if (err) {
                    return res.serverError(err);
                }
                res.created(estoria);
            });
        });
    }
};
