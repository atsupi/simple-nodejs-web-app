console.log("node.js started");

var express = require('express');
var app = express();
var PORT = 3000;

var listener = app.listen(PORT, () => {
    console.log("${listener.address().port}");
});

app.use(express.static('public'));
app.get("/", (req, res) => {
    res.status(200).send(__dirname + '/src/index.html');
    console.log("GET: src/index.html is released");
});
