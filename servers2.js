var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('URL page ' + req.url);
    if(req.url === '/index' || req.url === '/main' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/main.html').pipe(res)
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/about.html').pipe(res)
    } else {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/404.html').pipe(res)
    }
    
});

server.listen(3000, '127.0.0.1')
console.log('We watch 127.0.0.1:3000')