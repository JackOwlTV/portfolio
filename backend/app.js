const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');

const Project = require('./models/Project');

require("dotenv").config();
const URI = process.env.URI;

const app = express();

app.use(express.json());

// Connexion a MongoDB
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


// Activer CORS pour toutes les routes
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
}));

app.post('/api/project', (req, res, next) => {
    delete req.body._id
    const project = new Project({
        ...req.body
    })
    project.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch((error => res.status(400).json({ error: error })));
})

app.get('/api/project', (req, res, next) => {
    const project = [
        {
            _id: 'azdazd',
            title: 'Projet Bookie',
            description: 'Projet Openclassroom...',
            imageUrl: '',
            link: '',
            githublink: '',
        }
    ];
    res.status(300).json(project);
});

module.exports = app;