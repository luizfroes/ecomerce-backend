const { logError } = require("../../utils/logger");

const { Category, Product, Tag } = require("../../models");

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
};

const getCategoryById = async (req, res) => {
  try {
    // find one category by its `id` value
    const data = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Category does not exist" });
  } catch (error) {
    logError("GET Category by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewCategory = async (req, res) => {
  try {
    // create a new category
    const { categoryName } = req.body;

    if (categoryName) {
      await Category.create({ categoryName });
      return res.json({ success: true, data: "Created Category" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the Category name" });
  } catch (error) {
    logError("POST Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
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
