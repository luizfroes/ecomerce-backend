const getAllCategories = (req, res) => {
  res.send("getAllCategories");
  // find all categories
  // be sure to include its associated Products
};

const getCategoryById = (req, res) => {
  res.send("getCategoryById");
  // find one category by its `id` value
  // be sure to include its associated Products
};

const createNewCategory = (req, res) => {
  res.send("createNewCategory");
  // create a new category
};

const updateCategoryById = (req, res) => {
  res.send("updateCategoryById");
  // update a category by its `id` value
};

const deleteCategoryById = (req, res) => {
  res.send("deleteCategoryById");
  // delete a category by its `id` value
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createNewCategory,
  updateCategoryById,
  deleteCategoryById,
};
