module.exports = function(req, res, next) {
    if (!req.headers || !req.headers.authorization) {
        return res.badRequest('no authorization header was found');
    }
    
    if (req.param('token')) {
        delete req.query.token;
    }
    
    var parts = req.headers.authorization.split(' '),
        scheme = parts[0];
    
    if (parts.length !== 2 || !/^Bearer$/i.test(scheme)) {
        return res.badRequest('invalid authorization header format');
    }
    
    Token.findOne({key: parts[1]}, function(err, token) {
        if (!token) {
            return res.notFound('authorization token not found');
        }
        
        TokenService.verify(token.key, token.secret, function(err, decoded) {
            if (err) {
                return res.notFound('invalid authorization token or was expired');
            }
            
            req.token = decoded;
            return next();
        });
    });
};