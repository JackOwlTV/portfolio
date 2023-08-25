const express = require('express');
const cors = require("cors");
const path = require("path");

const mongoose = require('mongoose');

const Project = require('./models/Project');

require("dotenv").config();
const URI = process.env.URI;

const app = express();
const projectRoutes = require("./routes/project");
const userRoutes = require("./routes/user");

app.use(express.json());

// Connexion a MongoDB
mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log({ message: error }));


// Activer CORS pour toutes les routes
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true
}));

// Ajoute un middleware pour analyser ces données et les rendre disponibles dans req.body
app.use(express.urlencoded({ extended: true }));

// Ajoute un middleware pour traiter les requêtes entrantes au format JSON
app.use(express.json());

// Définit une route pour gérer les requêtes liées aux projets de l'API
app.use("/api/projects", projectRoutes);

// Définit une route pour gérer les requêtes d'authentification de l'API
app.use("/api/auth", userRoutes);

// Définit un middleware pour servir les fichiers statiques du répertoire "images" à partir de l'URL "/images"
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;