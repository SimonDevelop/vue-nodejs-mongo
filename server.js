require('dotenv').config(); 
const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const path = __dirname + '/dist';

const mongo = require('./src/server/mongo.js');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path));

app.get('/', function (req, res) {
    res.sendFile(path + "index.html");
});

app.get('/marker', (req, res) => {
    mongo.getAll().then((value) => {
        if (false !== value) {
            res.status(200).json(value);
        } else {
            res.status(500).json({
                'errorMessage': 'Une erreur est survenue, veuillez réessayer plus tard.'
            });
        }
    });
});

app.get('/marker/:id', (req, res) => {
    mongo.get(req.params.id).then((value) => {
        if (false !== value) {
            res.status(200).json(value);
        } else {
            res.status(500).json({
                'errorMessage': 'Une erreur est survenue, veuillez réessayer plus tard.'
            });
        }
    });
});

app.delete('/marker/:id', (req, res) => {
    mongo.delete(req.params.id).then((value) => {
        if (false !== value) {
            res.status(200).json({deleted: true});
        } else {
            res.status(500).json({
                'errorMessage': 'Une erreur est survenue, veuillez réessayer plus tard.'
            });
        }
    });
});

app.post('/marker', (req, res) => {
    mongo.insert(req.body).then((value) => {
        if (false !== value) {
            res.status(200).json(value);
        } else {
            res.status(500).json({
                'errorMessage': 'Une erreur est survenue, veuillez réessayer plus tard.'
            });
        }
    });
});

app.listen(port, () => {
    console.log('API Only !')
});
