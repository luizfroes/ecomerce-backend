const { logError } = require("../../utils/logger");

const { Category, Product, Tag, ProductTag } = require("../../models");
const { isValidProduct, isValidUpdate } = require("../../utils/helpers");

const getAllProducts = async (req, res) => {
  try {
    // find all products
    const data = await Product.findAll({
      include: [
        {
          model: Category,
        },
        {
          model: Tag,
        },
      ],
    });
    return res.json({ success: true, data });
  } catch (error) {
    logError("GET Products", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const getProductById = async (req, res) => {
  try {
    // find a single product by its `id`
    const data = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
        },
        {
          model: Tag,
        },
      ],
    });

    if (data) {
      return res.json({ success: true, data });
    }

    return res
      .status(404)
      .json({ success: false, error: "Product does not exist" });
  } catch (error) {
    logError("GET Product by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewProduct = async (req, res) => {
  //try {
  // create a new Product
  if (!isValidProduct(req.body)) {
    return res.status(400).json({
      success: false,
      error: "Please read the documentation to find the required fields",
    });
  }
  const { productName, price, stock, categoryId, tagIds } = req.body;
  const newProduct = {
    productName,
    price,
    stock,
    categoryId,
    tagIds,
  };

  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tagId) => {
          return {
            productId: product.id,
            tagId,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((error) => {
      logError("POST Product", error.message);
      res
        .status(500)
        .json({ success: false, error: "Failed to send response" });
    });
};

const updateProductById = async (req, res) => {
  try {
    // update product data
    if (!isValidUpdate(req.body)) {
      return res.status(400).json({
        success: false,
        error: "Please read the documentation to find the required fields",
      });
    }

    data = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((product) => {
        // find all associated tags from ProductTag
        return ProductTag.findAll({ where: { productId: req.params.id } });
      })
      .then((productTags) => {
        // get list of current tag_ids
        const productTagIds = productTags.map(({ tagId }) => tagId);
        // create filtered list of new tag_ids
        const newProductTags = req.body.tagIds
          .filter((tagId) => !productTagIds.includes(tagId))
          .map((tagId) => {
            return {
              productId: req.params.id,
              tagId,
            };
          });
        // figure out which ones to remove
        const productTagsToRemove = productTags
          .filter(({ tagId }) => !req.body.tagIds.includes(tagId))
          .map(({ id }) => id);

        // run both actions
        return Promise.all([
          ProductTag.destroy({ where: { id: productTagsToRemove } }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      })

      .then((updatedProductTags) =>
        res.json({ success: true, data: "Updated Tag", updatedProductTags })
      );
  } catch (error) {
    logError("  UPDATE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const deleteProductById = async (req, res) => {
  try {
    // delete one product by its `id` value
    const data = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (data) {
      return res.json({ success: true, data: "Deleted Product" });
    }

    return res
      .status(404)
      .json({ success: false, error: "Product does not exist" });
  } catch (error) {
    logError("DELETE Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProductById,
  deleteProductById,
};
