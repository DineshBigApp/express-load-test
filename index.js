var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var port = 3030;
var routes = require('./routes/index');

app.use(bodyParser.json());
// app.use('/api/v1/', routes);
app.use(routes);


app.listen(port, () => {
 console.log("Server listening on port " + port);
});
