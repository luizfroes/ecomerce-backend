const { logError } = require("../../utils/logger");

const { Category, Product } = require("../../models");

const getAllCategories = async (req, res) => {
  try {
    // find all categories
    const data = await Category.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Categories", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  // be sure to include its associated Products
};

const getCategoryById = (req, res) => {
  try {
  } catch (error) {
    logError("GET Category by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  // find one category by its `id` value
  // be sure to include its associated Products
};

const createNewCategory = (req, res) => {
  try {
  } catch (error) {
    logError("POST Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  // create a new category
};

const updateCategoryById = (req, res) => {
  try {
  } catch (error) {
    logError("PUT Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  // update a category by its `id` value
};

const deleteCategoryById = (req, res) => {
  try {
  } catch (error) {
    logError("  DELETE Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
  // delete a category by its `id` value
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
