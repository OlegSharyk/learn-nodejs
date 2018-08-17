var express = require('express')

var app = express();

app.get('/', function(request, response){
    response.send('This is home')
})

app.get('/news', function(request, response){
    response.sendFile('This is news list')
})

app.get('/news/:id', function(request, response){
    response.send('This is news article with ID -> ' + request.params.id)
})

app.get('/user/:name', function(request, response){
    response.send('This is news article with name -> ' + request.params.name)
})

app.listen(3000)