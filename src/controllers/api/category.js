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

const updateCategoryById = async (req, res) => {
  try {
    // update a category by its `id` value
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!data[0]) {
      return res
        .status(400)
        .json({ success: false, error: "Please provide a new Category name" });
    }

    return res.json({ success: true, data: "Updated Category" });
  } catch (error) {
    logError("PUT Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteCategoryById = async (req, res) => {
  try {
    // delete a category by its `id` value
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (data) {
      return res.json({ success: true, data: "Deleted Category" });
    }

    return res
      .status(404)
      .json({ success: false, error: "Category does not exist" });
  } catch (error) {
    logError("DELETE Category", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
