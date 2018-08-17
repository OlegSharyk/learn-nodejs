var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function(request, response){
    response.render('index', {})
})

app.get('/news', function(request, response){
    var obj = {
        title: 'News',
        id: 3,
        paragraphs: ['paragraph', 'simple text', 'Numbers: 2,3,4,5,6', 99]
    }
    response.render('news', {newsId: request.params.id, newParam: 234, newsObj: obj})
})

app.get('/news/:id', function(request, response){
    var obj = {
        title: 'News',
        id: 3,
        paragraphs: ['paragraph', 'simple text', 'Numbers: 2,3,4,5,6', 99]
    }
    response.render('news', {newsId: request.params.id, newParam: 234, newsObj: obj})
})

app.get('/about', function(request, response){
    response.render('about')
})

app.post('/about', urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400)
    console.log(request.body)
    response.render('about-success', {data:request.body})
    // response.send('welcome, ' + request.body.username)
  })

// app.get(null, function(request, response){
//     response.sendFile(__dirname + '/404.html')
// })

// app.get('/user/:name', function(request, response){
//     response.send('This is news article with name -> ' + request.params.name)
// })

app.listen(3000)