// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {
    name: "categoryId",
  },
});
//Product.hasOne(Category);

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: {
    name: "categoryId",
  },
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: {
    name: "productId",
  },
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  foreignKey: {
    name: "tagId",
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
