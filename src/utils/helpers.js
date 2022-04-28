const isValidProduct = ({ productName, price, stock, categoryId }) =>
  productName && price && stock && categoryId;

const isValidUpdate = (payload) => {
  const validKeys = ["productName", "price", "stock", "categoryName", "tagIds"];

  return (isValid = Object.keys(payload).every((key) =>
    validKeys.includes(key)
  ));
};

module.exports = {
  isValidProduct,
  isValidUpdate,
};
