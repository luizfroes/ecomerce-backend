const getAllTags = (req, res) => {
  res.send("getAllTags");
  // find all tags
  // be sure to include its associated Product data
};

const getTagById = (req, res) => {
  res.send("getTagById");
  // find a single tag by its `id`
  // be sure to include its associated Product data
};

const createNewTag = (req, res) => {
  res.send("createNewTag");
  // create a new tag
};

const updateTagById = (req, res) => {
  res.send("updateTagById");
  // update a tag's name by its `id` value
};

const deleteTagById = (req, res) => {
  res.send("deleteTagById");
  // delete on tag by its `id` value
};

module.exports = {
  getAllTags,
  getTagById,
  createNewTag,
  updateTagById,
  deleteTagById,
};
