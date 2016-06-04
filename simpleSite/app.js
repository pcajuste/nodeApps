var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res, next){
    res.render('index',{title: 'NodeJS R Us'})
});

app.get('/about', function(req, res, next){
    res.render('about', {title: 'About NodeJS R Us'});
});

app.get('/contact', function(req, res, next){
   res.render('contact', {title: 'Contact Us'}); 
});

app.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'user_email@gmail.com',
            pass: 'user_password'
        }
    });
    
    var mailOptions = {
        from: 'User name2 <user_email2@gmail.com>',
        to: 'user_email@gmail.com',
        subject: 'Nodemailer email Submission',
        text: "You've got mail: " + req.body.name + ' Email: ' + req.body.email + '  Message: ' + req.body.message,
        html: "<p>You've got mail: </p>" + '<ul><li> Name: '+ req.body.name + '</li><li> Email: ' + req.body.email + '</li><li> Message: ' + req.body.message + '</li></ul>' 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.redirect('/');
        }else {
            alert('Message Sent: ' + info.response);
            res.redirect('/');
        }
    })
    
    
});


app.listen(port, function(){
    console.log("simpleSite listening on port: " + port);
})