const { Router } = require("express");

const {
  deleteCategoryById,
  updateCategoryById,
  createNewCategory,
  getCategoryById,
  getAllCategories,
} = require("../../controllers/api/category");

const { Category, Product } = require("../../models");

const router = Router();

// The `/api/categories` endpoint

router.get("/", getAllCategories);

router.get("/:id", getCategoryById);

router.post("/", createNewCategory);

router.put("/:id", updateCategoryById);

router.delete("/:id", deleteCategoryById);

module.exports = router;
