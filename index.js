console.log("node.js started");

var express = require('express');
var app = express();
var PORT = 3000;

var listener = app.listen(PORT, () => {
    console.log("port: %d", listener.address().port);
});

app.use(express.static('src'));
app.get("/test", (req, res) => {
    res.contentType('html');
    res.status(200).sendFile(__dirname + '/test/index.html');
    console.log("GET: test/index.html is released");
});
