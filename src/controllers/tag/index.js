const getAllTags = (req, res) => {
  "getAllCategories";
  // find all tags
  // be sure to include its associated Product data
};

const getTagById = (req, res) => {
  "getCategoryById";
  // find a single tag by its `id`
  // be sure to include its associated Product data
};

const createNewTag = (req, res) => {
  "createNewCategory";
  // create a new tag
};

const updateTagById = (req, res) => {
  "updateCategoryById";
  // update a tag's name by its `id` value
};

const deleteTagById = (req, res) => {
  "deleteCategoryById";
  // delete on tag by its `id` value
};

module.exports = {
  getAllTags,
  getTagById,
  createNewTag,
  updateTagById,
  deleteTagById,
};
