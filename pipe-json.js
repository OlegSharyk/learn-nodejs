var fs = require('fs');

var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'})
    var obj = {
        model: 'audi',
        speed: '235.4',
        wheels: 4
    }
    res.end(JSON.stringify(obj))
});

server.listen(3000, '127.0.0.1')
console.log('We watch 127.0.0.1:3000')