var express = require('express');
var app = express();
var expressHBS = require('express-handlebars');

app.use("/assets",express.static(__dirname+"/assets"));
app.engine('handlebars',expressHBS({
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

app.get('/', function(request,response){

    
    response.render("home");
});
app.get('/SignUP.html', function(request,response){

    
    response.render("signUP");
});
app.get('/LogIn.html', function(request,response){

    
    response.render("Login" );
});
app.get('/index.html', function(request,response){

    response.render("home");
});
app.get('/user.handlebars', function(request,response){

    response.render("user");
});

app.post("/login",function(request,response){

});

app.listen(process.env.PORT || '9123');