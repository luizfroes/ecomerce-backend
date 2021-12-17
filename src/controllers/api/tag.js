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

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Tag does not exist" });
  } catch (error) {
    logError("GET Tag by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewTag = async (req, res) => {
  try {
    // create a new tag
    const { tagName } = req.body;

    if (tagName) {
      await Tag.create({ tagName });
      return res.json({ success: true, data: "Created Tag" });
    }

    return res
      .status(400)
      .json({ success: false, error: "Please provide the Tag name" });
  } catch (error) {
    logError("POST Tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateTagById = (req, res) => {
  res.send("updateTagById");
  // update a tag's name by its `id` value
};

const deleteTagById = async (req, res) => {
  try {
    // delete on tag by its `id` value
    const data = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (data) {
      return res.json({ success: true, data: "Deleted Tag" });
    }

    return res
      .status(404)
      .json({ success: false, error: "Tag does not exist" });
  } catch (error) {
    logError("  DELETE Tag", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createNewTag,
  updateTagById,
  deleteTagById,
};
