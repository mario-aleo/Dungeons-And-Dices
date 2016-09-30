var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/'));

app.listen(port);

console.log('Node Server Express Web API Running on Port: ' + port);