const express = require("express");

const router = express.Router();

const categoriesControllers = require("./controllers/categoriesControllers");

router.get("/categories", categoriesControllers.browse); // Peut servir pour la liste déroulante
router.get("/categories/:id", categoriesControllers.read); // Tous les produits qui ont la catégorie id
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

const recettesControllers = require("./controllers/recettesControllers");

router.get("/recettes", recettesControllers.browse);
router.get("/recettes/:id", recettesControllers.read);
router.put("/recettes/:id", recettesControllers.edit);
router.post("/recettes", recettesControllers.add);
router.delete("/recettes/:id", recettesControllers.destroy);

module.exports = router;
