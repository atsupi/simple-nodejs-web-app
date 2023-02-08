console.log("node.js started");

var express = require('express');
var app = express();
var PORT = 3000;

var listener = app.listen(PORT, () => {
    console.log("port: %d", listener.address().port);
});

app.use(express.static('src'));
app.get("/", (req, res) => {
    res.contentType('html');
    res.status(200).sendFile(__dirname + '/src/index.html');
    console.log("GET: src/index.html is released");
});
