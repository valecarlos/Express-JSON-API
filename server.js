const express        = require('express');
// const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
// server.js
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //necesario para los put que se estan recibiendo

// Required for CORS to work
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
    res.header('Access-Control-Allow-Headers', 'appid, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, isajax');
    next();
});

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});