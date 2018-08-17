var fs = require('fs');

var mes = 'Hi its mee'
fs.readFile('text.txt', 'utf8', function(err, data){
    console.log(data)
});

fs.writeFile('some-text.txt', mes, function(err, data){});

// var message = 'Hi everybody\n' + file_read;

// fs.writeFileSync('new-text.txt', message)

// console.log(file_read);
// console.log(file_read.length);

console.log('test')