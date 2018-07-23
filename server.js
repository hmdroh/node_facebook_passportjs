require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");

var app = express();



var PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));



// Set Handlebars.
var exphbs = require("express-handlebars");




app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Routes
// =============================================================
require("./routs/routs")(app);

//creat https and http server for localhost:
    var PORT_HTTPS = 3000;
    var fs = require("fs");
    var http = require('http');
    var https = require('https');
    var credentials = {key: fs.readFileSync('./etc/server.key', 'utf8'), cert: fs.readFileSync('./etc/server.crt', 'utf8')};
    var httpServer = http.createServer(app), httpsServer = https.createServer(credentials, app);
httpServer.listen(PORT);
httpsServer.listen(PORT_HTTPS);


