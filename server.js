const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const { default: axios } = require('axios');
const port = 443;

// var key = fs.readFileSync('./selfsigned.key');
// var cert = fs.readFileSync('./selfsigned.crt');
var key = fs.readFileSync('./ssl/202106-wildtgappliance.key');
var cert = fs.readFileSync('./ssl/STAR_towngasappliance_com.crt');
var options = {
    key: key,
    cert: cert
};

app = express()
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
app.use((err, req, res, next) => {
    res.send('Something broke!')
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.post('/user', (req, res) => {
    const ec = /^[A-Za-z ]+$/i;
    const ecEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!ec.exec(req.body.name)) {
        res.send({
            error: "Failed! Illegal name value",
            type: 1
        });
    } else if (!ecEmail.exec(req.body.email)) {
        res.send({
            error: "Failed! Illegal email value",
            type: 2
        });
    } else {
        axios.post('http://172.28.88.72:443/api/user', req.body)
            .then((result) => res.send(result.data))
            .catch((err) => res.status(400).send({
                message: "Failed! address is already in use!"
            }));
    }
});

var server = https.createServer(options, app);

server.listen(port, () => {
    console.log("server starting on port : " + port)
});