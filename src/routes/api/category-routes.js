const { Router } = require("express");

const {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
} = require("../../controllers/category");

const { Category, Product } = require("../../models");

const router = Router();

// The `/api/categories` endpoint

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.post("/", createNewCategory);

router.put("/:id", updateCategoryById);

router.delete("/:id", deleteCategoryById);

module.exports = router;
