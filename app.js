/* packages */
const express = require('express'),
    exphbs  = require('express-handlebars'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');    

var port = process.env.PORT || 8080;

var app = express();
app.use(cookieParser());
    
/* configuration */
app.engine('hbs', exphbs({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.use(express.static("./public/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* GET middleware */
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

/* Error Handling */
app.use(function(err, req, res, next) {
    res.status(500);
    res.type("text/plain");
    res.send("Error:\n\n" + err.stack);
});

/* Page Not Found */
app.use(function(req, res) {
    res.status(404);
    res.render('404Page');
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
