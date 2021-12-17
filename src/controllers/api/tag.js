const { logError } = require("../../utils/logger");

const { Category, Product, Tag } = require("../../models");

const getAllTags = async (req, res) => {
  try {
    // find all tags
    const data = await Tag.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Tags", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getTagById = async (req, res) => {
  try {
    // find a single tag by its `id`
    const data = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
        },
      ],
    });
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Tag by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
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
