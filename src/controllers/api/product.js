const { logError } = require("../../utils/logger");

const { Category, Product, Tag } = require("../../models");

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
      .json({ success: false, error: "Category does not exist" });
  } catch (error) {
    logError("GET Product by ID", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const createNewProduct = async (req, res) => {
  try {
    // create a new Product
    const { productName, price, stock, categoryId, tagsId } = req.body;

    if (productName && price && stock && categoryId && tagsId) {
      Product.create({ productName, price, stock, categoryId, tagsId })
        .then((product) => {
          console.log(product);
          // if there's product tags, we need to create pairings to bulk create in the ProductTag model
          if (tagsId.length) {
            const productTagIdArr = tagsId.map((tagId) => {
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
        .then((productTagIds) => res.status(200).json(productTagIds));

      return res.json({ success: true, data: "Created Product" });
    }

    return res.status(400).json({
      success: false,
      error: "Please read the documentation to find the required fields",
    });
  } catch (error) {
    logError("POST Product", error.message);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response" });
  }
};

const updateProductById = (req, res) => {
  res.send("updateProductById");
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
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
