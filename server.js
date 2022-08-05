const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const port = 443;

var key = fs.readFileSync(__dirname + '/ssl/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/ssl/selfsigned.crt');
var options = {
    key: key,
    cert: cert
};

app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});