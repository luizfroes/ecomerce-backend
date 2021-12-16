const { ProductTag } = require("../models");

const productTagData = [
  {
    productId: 1,
    tagId: 6,
  },
  {
    productId: 1,
    tagId: 8,
  },
  {
    productId: 1,
    tagId: 9,
  },
  {
    productId: 1,
    tagId: 10,
  },
  {
    productId: 2,
    tagId: 4,
  },
  {
    productId: 2,
    tagId: 8,
  },
  {
    productId: 2,
    tagId: 9,
  },
  {
    productId: 3,
    tagId: 6,
  },
  {
    productId: 3,
    tagId: 7,
  },
  {
    productId: 3,
    tagId: 8,
  },
  {
    productId: 3,
    tagId: 10,
  },
  {
    productId: 4,
    tagId: 3,
  },
  {
    productId: 4,
    tagId: 9,
  },
  {
    productId: 5,
    tagId: 5,
  },
  {
    productId: 5,
    tagId: 9,
  },
  {
    productId: 5,
    tagId: 10,
  },
  {
    productId: 6,
    tagId: 6,
  },
  {
    productId: 6,
    tagId: 9,
  },
  {
    productId: 6,
    tagId: 10,
  },
  {
    productId: 7,
    tagId: 3,
  },
  {
    productId: 7,
    tagId: 9,
  },
  {
    productId: 8,
    tagId: 4,
  },
  {
    productId: 8,
    tagId: 8,
  },
  {
    productId: 8,
    tagId: 9,
  },
  {
    productId: 9,
    tagId: 6,
  },
  {
    productId: 9,
    tagId: 8,
  },
  {
    productId: 9,
    tagId: 10,
  },
  {
    productId: 10,
    tagId: 4,
  },
  {
    productId: 10,
    tagId: 8,
  },
  {
    productId: 10,
    tagId: 9,
  },
  {
    productId: 10,
    tagId: 10,
  },
  {
    productId: 11,
    tagId: 8,
  },
  {
    productId: 11,
    tagId: 9,
  },
  {
    productId: 11,
    tagId: 10,
  },
  {
    productId: 12,
    tagId: 7,
  },
  {
    productId: 12,
    tagId: 9,
  },
  {
    productId: 13,
    tagId: 7,
  },
  {
    productId: 13,
    tagId: 9,
  },
  {
    productId: 14,
    tagId: 4,
  },
  {
    productId: 14,
    tagId: 10,
  },
  {
    productId: 15,
    tagId: 5,
  },
  {
    productId: 15,
    tagId: 9,
  },
  {
    productId: 15,
    tagId: 10,
  },
  {
    productId: 16,
    tagId: 1,
  },
  {
    productId: 16,
    tagId: 2,
  },
  {
    productId: 17,
    tagId: 2,
  },
  {
    productId: 18,
    tagId: 8,
  },
  {
    productId: 19,
    tagId: 8,
  },
  {
    productId: 20,
    tagId: 1,
  },
  {
    productId: 20,
    tagId: 2,
  },
  {
    productId: 20,
    tagId: 8,
  },
  {
    productId: 21,
    tagId: 3,
  },
  {
    productId: 21,
    tagId: 10,
  },
  {
    productId: 22,
    tagId: 10,
  },
  {
    productId: 23,
    tagId: 5,
  },
  {
    productId: 23,
    tagId: 8,
  },
  {
    productId: 23,
    tagId: 10,
  },
  {
    productId: 24,
    tagId: 4,
  },
  {
    productId: 24,
    tagId: 9,
  },
  {
    productId: 25,
    tagId: 3,
  },
  {
    productId: 25,
    tagId: 9,
  },
  {
    productId: 26,
    tagId: 7,
  },
  {
    productId: 26,
    tagId: 9,
  },
  {
    productId: 27,
    tagId: 6,
  },
  {
    productId: 27,
    tagId: 9,
  },
  {
    productId: 28,
    tagId: 5,
  },
  {
    productId: 28,
    tagId: 9,
  },
  {
    productId: 29,
    tagId: 3,
  },
  {
    productId: 29,
    tagId: 9,
  },
  {
    productId: 30,
    tagId: 6,
  },
  {
    productId: 30,
    tagId: 10,
  },
  {
    productId: 31,
    tagId: 4,
  },
  {
    productId: 31,
    tagId: 9,
  },
  {
    productId: 32,
    tagId: 6,
  },
  {
    productId: 32,
    tagId: 10,
  },
  {
    productId: 33,
    tagId: 7,
  },
  {
    productId: 33,
    tagId: 9,
  },
  {
    productId: 34,
    tagId: 5,
  },
  {
    productId: 34,
    tagId: 9,
  },
  {
    productId: 35,
    tagId: 4,
  },
  {
    productId: 35,
    tagId: 10,
  },
  {
    productId: 36,
    tagId: 5,
  },
  {
    productId: 36,
    tagId: 8,
  },
  {
    productId: 36,
    tagId: 9,
  },
  {
    productId: 37,
    tagId: 7,
  },
  {
    productId: 37,
    tagId: 8,
  },
  {
    productId: 37,
    tagId: 10,
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
