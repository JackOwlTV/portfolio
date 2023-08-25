// Déclaration et importation des dépendances
const express = require("express");
const auth = require("../middleware/auth");
const projectCtrl = require("../controllers/project");
const multer = require("../middleware/multer-config");
const router = express.Router();

// Mise en place de la configuration des routes

// Route pour créer un nouveau livre
router.post("/", auth, multer, projectCtrl.postOneProject);


// Route pour mettre à jour les informations d'un livre existant
router.put("/:id", auth, multer, projectCtrl.putOneProject);

// Route pour supprimer un livre existant
router.delete("/:id", auth, projectCtrl.deleteOneProject);


// Route pour obtenir les informations d'un livre spécifique
router.get("/:id", projectCtrl.getOneProject);

// Route pour obtenir tous les livres
router.get("/", projectCtrl.getAllProjects);

module.exports = router;