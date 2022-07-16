const express = require('express');
const path = require('path');

const app = express();

const paths = require('./db.json')
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Length, Accept, Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    next();
})
app.get('/', (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(paths))
});

app.listen(process.env.PORT || 3000);
