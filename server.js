const express = require('express');
const path = require('path');

const app = express();

const paths = require('./db.json')

app.get('/', (req, res) => {
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(paths))
});

app.listen(process.env.PORT || 3000);