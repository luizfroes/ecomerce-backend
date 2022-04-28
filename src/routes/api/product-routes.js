const { Router } = require("express");

const {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
} = require("../../controllers/api/product");

const { Product, Category, Tag, ProductTag } = require("../../models");

const router = Router();

// The `/api/products` endpoint

// get all products
router.get("/", getAllProducts);

// get one product
router.get("/:id", getProductById);

// create new product
router.post("/", createNewProduct);

// update product
router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
