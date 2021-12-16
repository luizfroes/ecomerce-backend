const getAllCategories = (req, res) => {
  "getAllCategories";
  // find all categories
  // be sure to include its associated Products
};

const getCategoryById = (req, res) => {
  "getCategoryById";
  // find one category by its `id` value
  // be sure to include its associated Products
};

const createNewCategory = (req, res) => {
  "createNewCategory";
  // create a new category
};

const updateCategoryById = (req, res) => {
  "updateCategoryById";
  // update a category by its `id` value
};

const deleteCategoryById = (req, res) => {
  "deleteCategoryById";
  // delete a category by its `id` value
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
