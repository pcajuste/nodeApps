var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use("/assets", express.static(__dirname + "/public"));

app.get('/', function(req, res, next){
    res.render('index',{title: 'NodeJS R Us'})
});

app.get('/about', function(req, res, next){
    res.render('about', {title: 'About NodeJS R Us'});
});

app.get('/contact', function(req, res, next){
   res.render('contact', {title: 'Contact Us'}); 
});

app.listen(port, function(){
    console.log("simpleSite listening on port: " + port);
})