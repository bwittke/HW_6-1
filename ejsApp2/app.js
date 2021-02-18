var express = require('express');
var path = require('path');

//leaving in the bodyParser in case we ever send up form data and need to get data out of form
var bodyParser = require('body-parser');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// just one "site" with 2 pages, / and about

// use res.render to load up an ejs view file
// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/index', function(req, res) {
    res.render('pages/index');
});

app.get('/default', function(req, res) {
    res.render('pages/index');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


// upLoadData page 
// sending a get with 1 param
// http://localhost:3000/uploadData?id=2
// http://localhost:3000/uploadData?msg=answer%20to%20everything&id=42
app.get('/uploadData', function(req, res) {
    let idVar = req.param('id');
    let msgVar = req.param('msg');
    // passing an object, used like a dictionary, to the render code
    res.render('pages/uploadData', { 
        value1PassedToRenderPage: idVar,
        value2PassedToRenderPage: msgVar
     });
  });



// error page 
app.get('/error', function(req, res) {
    // should get real data from some real operation, but instead ...
    let message = "some text from someplace";
    let errorObject ={
        status: "this is real bad",
        stack: "somebody called #$% somebody who called somebody <awful>"
    };
    res.render('pages/error', {  // pass the data to the page renderer
        message: message,
        error: errorObject
    });
});

// movie page 
app.get('/movies', function(req, res) {
    // should get real data from some real operation, but instead ...
    let movie1 = "Sing Street";
    let movie2 = "The Others";
    let movie3 = "Happy Gilmore";
    let movie4 = "Harry Potter (any of them)"
        
    res.render('pages/movies', {  // pass the data to the page renderer
        movie1: movie1,
        movie2: movie2,
        movie3: movie3,
        movie4: movie4,
    });
});

// tv shows page 
app.get('/tvshows', function(req, res) {
    // should get real data from some real operation, but instead ...
    let show1 = "The Office";
    let show2 = "Stranger Things";
    let show3 = "The Three Stooges";
    let show4 = "Portlandia"
        
    res.render('pages/tvshows', {  // pass the data to the page renderer
        show1: show1,
        show2: show2,
        show3: show3,
        show4: show4,
    });
});

app.listen(3000);  // not setting port number in www.bin, simple to do here
console.log('3000 is the magic port');

module.exports = app;
