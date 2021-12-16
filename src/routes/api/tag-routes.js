const { Router } = require("express");

const {
  getAllTags,
  getTagById,
  createNewTag,
  updateTagById,
  deleteTagById,
} = require("../../controllers/api/tag");

const { Tag, Product, ProductTag } = require("../../models");

const router = Router();

// The `/api/tags` endpoint

router.get("/", getAllTags);

router.get("/:id", getTagById);

router.post("/", createNewTag);

router.put("/:id", updateTagById);

router.delete("/:id", deleteTagById);

module.exports = router;
