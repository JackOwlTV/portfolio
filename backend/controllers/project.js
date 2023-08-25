// Déclaration et importation des dépendances
const Project = require("../models/Project");
const fs = require("fs")

exports.postOneProject = (req, res, next) => {

    // const projectObject = (req.body); //Test avec Postman
    const projectObject = JSON.parse(req.body.project);
    delete projectObject._id;
    delete projectObject._userId;
    const project = new Project({
        ...projectObject,
        userId: req.auth.userId,
        pictures: req.file ? `${req.protocol}://${req.get("host")}/${req.file.name}` : null,
    });
    project
        .save()
        .then(() => {
            res.status(201).json({ message: "Projet créé !" })
        }
        )
        .catch((error) => res.status(500).json({ error }));
};



exports.putOneProject = (req, res, next) => {
    const projectObject = req.file ? {
        ...JSON.parse(req.body.project),
        pictures: `${req.protocol}://${req.get('host')}/${req.file.name}`
    } : { ...req.body };

    delete projectObject._userId;
    Project.findOne({ _id: req.params.id })
        .then((project) => {
            if (project.userId != req.auth.userId) {
                res.status(401).json({ message: "Vous n'êtes pas autorisé à modifier ce projet." });
            } else {
                const oldpictures = project.pictures; // Sauvegarde de l'ancienne URL de l'image
                Project.updateOne({ _id: req.params.id }, { ...projectObject, _id: req.params.id })
                    .then(() => {
                        if (req.file && oldpictures) {
                            const filename = oldpictures.split('/images/')[1];
                            fs.unlink(`images/${filename}`, (error) => {
                                if (error) {
                                    console.error("Erreur lors de la suppression de l'ancienne image :", error);
                                }
                            });
                        }
                        res.status(200).json({ message: "Le projet a été modifié!" });
                    })
                    .catch(error => res.status(401).json({ error }));
            }
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


exports.deleteOneProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .then(project => {
            if (!project) {
                res.status(500).json({ message: "Ce projet n'existe pas." });
            }
            if (project.userId != req.auth.userId) {
                res.status(401).json({ message: "Vous n'êtes pas autorisé à supprimer ce projet." });
            } else {
                const filename = project.pictures.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Project.deleteOne({ _id: req.params.id })
                        .then(() => { res.status(200).json({ message: "Le projet a été supprimé !" }) })
                        .catch(error => res.status(401).json({ error }));
                });
            }
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

exports.getBestRating = (req, res, next) => {
    Project.find()
        .sort({ averageRating: -1 })  //Trie par ordre décroissant
        .limit(3) //Garder uniquement les 0 premiers
        .then((projects) => {
            res.status(200).json(projects);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


exports.getOneProject = (req, res, next) => {
    Project.findOne({ _id: req.params.id })
        .then((project) => {
            if (!project) {
                return res.status(404).json({ message: "Le projet n'existe pas." });
            }
            res.status(200).json(project);
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};


exports.getAllProjects = (req, res, next) => {
    Project.find()
        .then((projects) => {
            if (projects === null) {
                res.status(204).json({ message: "Pas de projets" })
            } res.status(200).json(projects)
        })
        .catch((error) => res.status(400).json({ error }));
};