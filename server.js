function server () {
    var exp = require('express'),
        http = require('http');
    var config = require('./config.json');
    var app = exp();

    app.set("port", config.port);

    app.use(exp.static(__dirname ));

    http.createServer(app).listen(app.get('port'), function () {
        console.log('server on port '+app.get('port')+' html/*.html');
    });
};

module.exports= server;


















