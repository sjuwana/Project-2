const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();
router.get("/", (req, res) => res.send("this is the root!"));

router.post("/recipes", controllers.createRecipe);
router.post("/countries", controllers.createCountries);
router.post("/ingredient", controllers.createIngredient);
router.post("/language", controllers.createLanguage);
router.get("/recipes", controllers.getAllRecipes);
router.get("/recipes/:id", controllers.getRecipeById);
router.put("/recipes/:id", controllers.updateRecipesById);
router.delete("/recipes/:id", controllers.deleteRecipesById);

module.exports = router;
