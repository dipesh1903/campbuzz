var express = require('express'),
	app     = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname+'/public'));


//==================================================
//   ROUTES            ROUTES           ROUTES
//==================================================


app.get('/home', function(req,res){
	res.render('home');
});

app.get('/', function(req,res){
	res.redirect('/home');
});

app.get('/travel',function(req,res){
	res.render('travel');
});

app.listen(3000, function(){
	console.log("successfully connected");
});