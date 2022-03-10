const res = require("express/lib/response");
const Recipe = require("../models/nationaldish");
const Language = require("../models/language");
const Countries = require("../models/countries");
const Ingredient = require("../models/ingredient");

async function createRecipe(req, res) {
  try {
    const recipe = await new Recipe(req.body);
    await recipe.save();
    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createCountries(req, res) {
  try {
    const country = await new Countries(req.body);
    await country.save();
    return res.status(201).json({ country });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createLanguage(req, res) {
  try {
    const language = await new Language(req.body);
    await language.save();
    return res.status(201).json({ language });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createIngredient(req, res) {
  try {
    const ingredient = await new Ingredient(req.body);
    await ingredient.save();
    return res.status(201).json({ ingredient });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getRecipeById(req, res) {
  try {
    const { id } = req.params;
    const recipe = await Recipe.findById(id);
    if (recipe) {
      return res.status(200).json(recipe);
    }
    return res.status(400).send("Recipe with specified ID does not exist");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find()
      .populate("country_origin", "country_name capital language -_id")
      .populate("ingredient", "ingredient preptime -_id");
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const updateRecipesById = (req, res) => {
  try {
    const { id } = req.params;
    Recipe.findByIdAndUpdate(id, req.body, { new: true }, (err, recipe) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(err.message);
      } else {
        console.log(recipe);
        res.json(recipe);
      }
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

async function deleteRecipesById(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Recipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted");
    }
    throw new Error("Recipe not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
module.exports = {
  createRecipe,
  createCountries,
  createIngredient,
  createLanguage,
  getAllRecipes,
  getRecipeById,
  updateRecipesById,
  deleteRecipesById,
};
