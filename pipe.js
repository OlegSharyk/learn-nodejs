var fs = require('fs');

var http = require('http');

var server = http.createServer(function(req, res){
    // console.log('URL page ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    var myReadShort = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // var myWriteShort = fs.createWriteStream(__dirname + '/news-pipe.txt');
    myReadShort.pipe(res)

    // res.end('Hi world Привет мир')
});

server.listen(3000, '127.0.0.1')
console.log('We watch 127.0.0.1:3000')