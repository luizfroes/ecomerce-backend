// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const connection = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// set up fields and rules for Product model
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Product",
        key: "id",
      },
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Tag",
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "productTag",
  }
);

module.exports = ProductTag;
