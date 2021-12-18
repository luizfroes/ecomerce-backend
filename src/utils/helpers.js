const isValidProduct = ({ productName, price, stock, categoryId }) =>
  productName && price && stock && categoryId;

const isValidUpdate = ({ productName, price, stock, categoryId, tagIds }) =>
  productName || price || stock || categoryId || tagIds;

module.exports = {
  isValidProduct,
  isValidUpdate,
};
