const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { default: axios } = require('axios');
const port = 443;

var key = fs.readFileSync('./selfsigned.key');
var cert = fs.readFileSync('./selfsigned.crt');
// var key = fs.readFileSync('./ssl/202106-wildtgappliance.key');
// var cert = fs.readFileSync('./ssl/STAR_towngasappliance_com.crt');
var options = {
    key: key,
    cert: cert
};

app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/user', (req, res) => {
    axios.post('http://0.0.0.0:444/api/user', req.body)
        .then((result) => res.send(result.data))
        .catch((err) => console.log(err))
});

var server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});