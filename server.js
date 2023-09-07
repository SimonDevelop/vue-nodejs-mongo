require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mongo = require('./src/server/mongo.js');

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


app.listen(port, () => {
    console.log('API Only !')
});
